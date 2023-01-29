import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

//axios
//import axios from "axios";
//import VueAxios from "vue-axios";

Vue.config.productionTip = false;

//axios
//Vue.use(VueAxios, axios);

//axios.defaults.baseURL = `https://nonochris.herokuapp.com/api/wedNonoChris`;

import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

Vue.filter("two_digits", function(value) {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }
  return value.toString();
});
