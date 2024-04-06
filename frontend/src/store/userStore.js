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
        signInWithEmailAndPassword(auth, payload.email, payload.password)
          .then(async (firebaseUser) => {
            try {
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
              }
            } catch (e) {
              console.log(e);
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
          })
          .finally(async () => {
            router.push("/home");
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
      try {
        createUserWithEmailAndPassword(
          auth,
          payload.user.email,
          payload.password
        )
          .then(async (firebaseUser) => {
            await dispatch("createUser", {
              user_name: payload.user.name,
              user_email: payload.user.email,
              uid: firebaseUser.user.uid,
            });
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
          });
      } catch (e) {
        console.log(e)
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
    getCurrentUserOnFirebase({ dispatch }) {
      try {
        db.getCurrentUser();
      } catch (e) {
        console.log(e);
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
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default userStore;
