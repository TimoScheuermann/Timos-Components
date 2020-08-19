import { Icon } from '@/models/Icon.model';
import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    dark: false,
    primary: '#08f',
    designer: {
      component: ''
    },
    icons: [] as Icon[]
  },
  getters: {
    primary: (state: any): string => {
      return state.primary;
    },
    designerComponent: (state: any) => {
      return state.designer.component;
    },
    icons: (state: any): Icon[] => {
      return state.icons;
    },
    dark: (state: any): boolean => {
      return state.dark;
    }
  },
  mutations: {
    updateDesignerComponent(state: any, comp: string) {
      state.designer.component = comp;
    },
    updateIcons(state: any, icons: Icon[]) {
      state.icons = icons;
    },
    toggleDarkMode(state: any) {
      state.dark = !state.dark;
    },
    setDarkMode(state: any, dark: boolean) {
      state.dark = dark;
    }
  }
});

export default store;
