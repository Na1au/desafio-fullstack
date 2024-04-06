import bdController from "@/controllers/bdController";
import User from "@/models/User";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import router from "@/router/index";

const db = new bdController();

const userStore = {
  namespaced: true,
  state: () => ({
    currentUser: null,
  }),
  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
    getUserById({ dispatch, commit }, payload) {
      try {
        const user = db.getById(payload);
        let finalUser = new User(user);
        commit("SET_USER", finalUser);
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message:
              "Erro ao pegar os dados do usuário selecionado, tente novamente mais tarde",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
    login({ dispatch, commit, state }, payload) {
      try {
        var statusUser = null;
        var empresa_id = null;
        signInWithEmailAndPassword(auth, payload.email, payload.password)
          .then(async (firebaseUser) => {
            try {
              localStorage.setItem("email", firebaseUser.user.email);
              localStorage.setItem("uid", firebaseUser.user.uid);
              localStorage.setItem(
                "accessToken",
                firebaseUser.user.accessToken
              );

              const user = await db.getUserById(firebaseUser.user.uid);
              if (user == "User not found") {
                dispatch(
                  "setDialog",
                  {
                    message: "Erro: usuário não encontrado",
                    icon: "alert-circle-outline",
                    type: "danger",
                  },
                  { root: true }
                );
              } else {
                let finalUser = new User(user.data);
                commit("SET_CURRENT_USER", finalUser);
                statusUser = finalUser.status;
                empresa_id = finalUser.empresa_id;

                if (firebaseUser.user.displayName == null) {
                  commit("SET_POPUP_USER", true);
                }
              }
            } catch (e) {
              console.log(e);
            } finally {
              localStorage.setItem("name", firebaseUser.user.displayName);
            }
          })
          .catch((err) => {
            let text =
              err.message == "Firebase: Error (auth/invalid-email)."
                ? "Erro: E-mail inválido"
                : err.message ==
                  "Firebase: Error (auth/invalid-login-credentials)."
                ? "Erro: Credenciais inválidas"
                : "Erro: Por favor, tente novamente mais tarde.";
            dispatch(
              "setDialog",
              {
                message: text,
                icon: "alert-circle-outline",
                type: "danger",
              },
              { root: true }
            );
          })
          .finally(async () => {
            if (statusUser == "ATIVO" && statusUser != null) {
              await dispatch(
                "empresaModule/getCurrentUserEmpresa",
                empresa_id,
                { root: true }
              );
              router.push("/dashboard/dash");
            } else if (statusUser == "ADMIN") {
              await dispatch(
                "empresaModule/getCurrentUserEmpresa",
                state.adminUserEmpresa,
                { root: true }
              );
              router.push("/dashboard/dash");
            } else if (auth.currentUser != null && statusUser == "INATIVO") {
              dispatch(
                "setDialog",
                {
                  message: "Ops! Parece que seu plano não está ativo",
                  icon: "alert-circle-outline",
                  type: "warning",
                },
                { root: true }
              );
            }
          });
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message: "Erro ao logar o usuário, tente novamente mais tarde",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
    createAuthUser({ dispatch }, payload) {
      const currentUser = auth.currentUser;
      try {
        createUserWithEmailAndPassword(
          auth,
          payload.user.email,
          payload.password
        )
          .then(async (firebaseUser) => {
            updateProfile(firebaseUser.user, {
              displayName: payload.user.name,
            });
            await auth.updateCurrentUser(currentUser);
            await dispatch("createUser", {
              name: payload.user.name,
              email: payload.user.email,
              status: payload.user.status,
              empresa_id: payload.user.empresa_id,
              uId: firebaseUser.user.uid,
            });
            dispatch("getAllUsers");
            dispatch(
              "setDialog",
              {
                message: "Usuário criado com sucesso",
                type: "success",
                icon: "person-add",
              },
              { root: true }
            );
          })
          .catch((error) => {
            const e = error.message;
            const text =
              e == "Firebase: Error (auth/invalid-email)."
                ? "Erro: E-mail inválido."
                : e ==
                  "Firebase: Password should be at least 6 characters (auth/weak-password)."
                ? "Erro: a senha deve ter ao menos 6 caracteres"
                : e == "Firebase: Error (auth/email-already-in-use)."
                ? "Erro: e-mail já em uso."
                : "Erro ao criar um novo usuário, tente novamente mais tarde.";
            dispatch(
              "setDialog",
              {
                message: text,
                type: "danger",
                icon: "alert-circle-outline",
              },
              { root: true }
            );
          });
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message: "Erro ao criar autenticação do usuário",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
    async createUser({ dispatch }, payload) {
      try {
        await db.createUser(payload);
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message: "Erro ao adicionar o usuário ao banco de dados",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
    editUser({ dispatch }, payload) {
      try {
        db.editUser(payload.name, payload.uid);
        dispatch(
          "setDialog",
          {
            message: "Nome de usuário atualizado com sucesso.",
            type: "success",
            icon: "checkmark-circle-outline",
          },
          { root: true }
        );
        localStorage.setItem("name", payload.name);
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message: "Erro ao editar o usuário",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
    getCurrentUserOnFirebase({ dispatch }) {
      try {
        db.getCurrentUser();
      } catch (e) {
        console.log(e);
        /* dispatch(
          "setDialog",
          {
            message: "Erro ao reautenticar o usuário no Firebase Auth",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        ); */
      }
    },
    async getCurrentUser({ dispatch, commit, state }, id) {
      try {
        db.getCurrentUser();
        const user = await db.getUserById(id);
        let finalUser = new User(user.data);
        commit("SET_CURRENT_USER", finalUser);
        if (user == "User not found") {
          console.log("User not found");
        } else if (finalUser.status == "ATIVO") {
          await dispatch(
            "empresaModule/getCurrentUserEmpresa",
            finalUser.empresa_id,
            { root: true }
          );
        } else if (finalUser.status == "ADMIN") {
          await dispatch(
            "empresaModule/getCurrentUserEmpresa",
            state.adminUserEmpresa ?? 1,
            { root: true }
          );
        } else {
          dispatch(
            "setDialog",
            {
              message: "Ops! Parece que seu plano não está ativo",
              icon: "alert-circle-outline",
              type: "warning",
            },
            { root: true }
          );
        }
      } catch (e) {
        console.log(e);
        /* dispatch(
          "setDialog",
          {
            message: "Erro ao reautenticar o usuário no Firebase Auth",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        ); */
      }
    },
    updateUserPassword({ dispatch }, email) {
      try {
        db.sendResetPasswordEmailLink(email);
        dispatch(
          "setDialog",
          {
            message: "Link enviado com sucesso",
            type: "success",
            icon: "mail",
          },
          { root: true }
        );
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message: "Erro ao enviar link para redefinição de senha.",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
    async resetUserPassword({ dispatch }, payload) {
      try {
        await db.updateUserPassword(payload).then(() => {
          router.push("/");
        });
      } catch (e) {
        dispatch(
          "setDialog",
          {
            message: "Erro ao atualizar a senha do usuário do usuário.",
            icon: "alert-circle-outline",
            type: "danger",
          },
          { root: true }
        );
      }
    },
  },
};

export default userStore;
