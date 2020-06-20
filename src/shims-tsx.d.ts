import Vue, { VNode } from 'vue';
import VueRouter from 'vue-router';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface router extends VueRouter {}
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
