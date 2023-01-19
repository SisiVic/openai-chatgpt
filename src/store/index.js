import { createStore } from 'vuex';
import generate from '../components/generate.js';

export default createStore({
  state: {
    response: '',
  },
  getters: {},
  mutations: {
    CHANGE_RESPONSE(state, response) {
      state.response = response
    }
  },
  actions: {
    async onSubmit({ commit }, text) {
      const response = await generate(text)
      commit('CHANGE_RESPONSE', response)
    }
  },
  modules: {},
});
