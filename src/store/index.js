import { createStore } from 'vuex'

export default createStore({
  state: {
    hasEnteredPassword: false,
    passwordError: false,
    encryptionKey: 'welcometomyportfolio'
  },
  getters: {
  },
  mutations: {
    passwordCheck(state, password) {
      if (password === state.encryptionKey) {
        state.hasEnteredPassword = true;
      } else {
        setTimeout(() => {
          state.passwordError = true;
        }, 1000);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
