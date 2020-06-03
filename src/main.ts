import Vue from 'vue';
import Dummy from 'dummyjs';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('truncate', (text: string, length = 10, suffix = '') => text.substring(0, length) + suffix);

Vue.directive('dummy', (el, binding) => {
  if (!el) {
    return;
  }

  const allowedTypes = {
    text: /^\d+,\d+$/,
    image: /^\d+,\d+x\d+,\d+$/,
  };
  const { value, arg = 'text' } = binding;

  if (!Object.keys(allowedTypes).includes(arg)) {
    return;
  }

  if (typeof value === 'number' || (typeof value === 'string' && value.match(allowedTypes[arg as 'text' | 'image']))) {
    if (arg === 'text') {
      el.innerHTML += Dummy.text(value);
    } else {
      el.innerHTML += `<img alt="Dummy image ${value}" src="${Dummy.image(binding.value)}" />`;
    }
  }
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
