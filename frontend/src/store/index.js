import { createStore } from "vuex";
import userStore from "./userStore";

const store = createStore({
  state: {
    loading: false,
    formContato: {
      visible: false,
      route: "",
    },
    selectedContato: {
      client_name: "",
      client_email: "",
      client_address: "",
      client_phone: "",
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_FORM_CONTATO(state, payload) {
      console.log("ENTROU AQUI");
      state.formContato = payload;
    },
    SET_SELECTED_CONTATO(state, payload) {
      state.selectedContato = payload;
    }
  },
  actions: {
    setDialog({ commit }, payload) {
      commit("SET_DIALOG", {
        message: payload.message,
        type: payload.type,
        isVisible: true,
        icon: payload.icon,
      });
      setTimeout(() => {
        commit("SET_DIALOG", {
          message: "",
          type: "",
          isVisible: false,
          icon: "",
        });
      }, "3000");
    },
  },
  modules: {
    userModule: userStore,
  },
});

export default store;
