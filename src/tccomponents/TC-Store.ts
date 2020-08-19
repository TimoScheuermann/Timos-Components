import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */

Vue.use(Vuex);

export const tcStore = new Vuex.Store({
  state: {
    dark: false,
    primary: '#08f'
  },
  getters: {
    dark: (state: any): boolean => {
      return state.dark;
    },
    primary: (state: any): string => {
      return state.primary;
    }
  },
  mutations: {
    toggleDarkMode(state: any) {
      state.dark = !state.dark;
    },
    setDarkMode(state: any, dark: boolean) {
      state.dark = dark;
    },
    setPrimary(state: any, primary: string) {
      state.primary = primary;
    }
  }
});
