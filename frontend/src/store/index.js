import { createStore } from "vuex";
import userStore from "./userStore";
import ClientController from "@/controllers/ClientController";

const cController = new ClientController();
const store = createStore({
  state: {
    loading: false,
    formContato: {
      visible: false,
      route: "",
    },
    contatoDetail: {
      visible: false,
      contato: {}
    },
    selectedContato: {
      client_name: "",
      client_email: "",
      client_address: "",
      client_phone: "",
    },
    deleteContato: {
      visible: false,
      contato: {}
    }
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
    },
    SET_CONTATO_DETAIL(state, payload) {
      state.contatoDetail = payload;
    },
    SET_DELETE_CONTATO(state, payload) {
      state.deleteContato = payload;
    }
  },
  actions: {
    deleteContato({payload}) {

    }
  },
  modules: {
    userModule: userStore,
  },
});

export default store;
