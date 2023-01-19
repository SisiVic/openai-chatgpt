import { createStore } from 'vuex';
import generate from '../components/generate.js';

export default createStore({
  state: {
    response: '',
    conversation: [],
  },
  getters: {},
  mutations: {
    CHANGE_RESPONSE(state, response) {
      state.response = response;
    },
    CHANGE_CONVERSATION(state, payload) {
      const temp = [...state.conversation, ...payload]
      state.conversation = temp
    }
  },
  actions: {
    async onSubmit({ commit }, text) {
      const response = await generate(text);
      const temp = [text, response]
      commit('CHANGE_CONVERSATION', temp);
      commit('CHANGE_RESPONSE', response);
    }
  },
  modules: {},
});
