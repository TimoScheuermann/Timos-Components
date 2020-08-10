/* eslint-disable */
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Vue from 'vue';
import { Route } from 'vue-router';
import './code-theme.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

router.beforeEach((to: Route, from: Route, next) => {
  const title = to.meta.title || 'TC Components';
  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);

  const twitter = document.querySelector('meta[property="twitter:title"]');
  if (twitter) twitter.setAttribute('content', title);

  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute('content', title);

  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
