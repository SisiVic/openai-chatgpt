import { createStore } from 'vuex';
import generate from '../components/generate.js';

export default createStore({
  state: {
    response: '',
    conversation: [],
  },
  mutations: {
    CHANGE_RESPONSE(state, response) {
      state.response = response;
    },
    CHANGE_CONVERSATION(state, payload) {
      state.conversation.push(payload)
    }
  },
  actions: {
    async onSubmit({ commit, state }, text) {
      const capitalizedText = text[0].toUpperCase() + text.slice(1).toLowerCase();
      const tempText = '\nHuman: ' + capitalizedText;
      commit('CHANGE_CONVERSATION', tempText);
      
      const response = await generate(state.conversation);
      commit('CHANGE_CONVERSATION', response);
      commit('CHANGE_RESPONSE', response);
    }
  },
});
