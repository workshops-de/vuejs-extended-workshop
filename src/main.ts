import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('truncate', (text: string, length = 10, suffix = '') => text.substring(0, length) + suffix);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
