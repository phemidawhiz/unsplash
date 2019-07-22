import api from "../../api";

const state = {
  user: {
    token: ""
  }
};

const getters = {
  getDetails(newState) {
    return newState.user;
  }
};

const mutations = {
  
};

const actions = {
  
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
