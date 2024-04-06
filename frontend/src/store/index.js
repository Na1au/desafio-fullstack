import { createStore } from "vuex";
import userStore from "./userStore";
import ClientController from "@/controllers/ClientController";

const cController = new ClientController();
const store = createStore({
  state: {
    clients: [],
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
    },
    SET_CLIENTES(state, payload) {
      state.clients = payload;
    }
  },
  actions: {
    deleteContato({}, payload) {
      cController.deleteClient(payload)
    },
    async getClients({commit}) {
      let contatos = await cController.getClients().then((res) => {
        return res
      })
      commit('SET_CLIENTES', contatos)
    },
    async editContato({commit, dispatch, state}, payload) {
      if(payload.id) {
        cController.editClient(payload)
      } else {
        await cController.createClient(payload);
      }

      setTimeout(() => {
        dispatch('getClients')
      }, 1500)
    }
  },
  modules: {
    userModule: userStore,
  },
});

export default store;
