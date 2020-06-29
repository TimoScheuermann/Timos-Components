import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    designer: {
      component: ''
    }
  },
  getters: {
    designerComponent: (state: any) => {
      return state.designer.component;
    }
  },
  mutations: {
    updateDesignerComponent(state: any, comp: string) {
      state.designer.component = comp;
    }
  }
});

export default store;
