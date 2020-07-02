import { Icon } from '@/models/Icon.model';
import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    designer: {
      component: ''
    },
    icons: [] as Icon[]
  },
  getters: {
    designerComponent: (state: any) => {
      return state.designer.component;
    },
    icons: (state: any): Icon[] => {
      return state.icons;
    }
  },
  mutations: {
    updateDesignerComponent(state: any, comp: string) {
      state.designer.component = comp;
    },
    updateIcons(state: any, icons: Icon[]) {
      state.icons = icons;
    }
  }
});

export default store;
