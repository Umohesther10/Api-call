import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },

  mutations: {
    setUsers(state, item){
      state.users= item
    },
    addUsers(state, item){
      state.users.push(item)
    },
    delUsers(state, item){
      state.users= item
    }
  },
  actions: {},
  modules: {}
});
