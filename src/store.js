import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSession from "vue-session";
import images from "./store/modules/images";

Vue.use(VueSession);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    images
  },

  state: {
    //$appConfig: process.env.VUE_APP_BASE_URI,
  },
  actions: {
    
  },

  mutations: {
    
  },
  getters: {
    
  }
});
