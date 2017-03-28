import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  routes,
  mode: 'history'

});


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router

}).$mount('#app');
