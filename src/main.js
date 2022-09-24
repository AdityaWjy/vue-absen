import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from './router'
import Userfront from '@userfront/vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource);
Userfront.init('demo1234')

//Custom direvtive
Vue.directive("rainbow", {
  bind(el) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  },
});

Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  },
});

//Filters
Vue.filter("to-uppercase", function (value) {
  return value.toUpperCase();
});

Vue.filter('to-snippet', function (value) {
  return value.slice(0,100) + '...';
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
