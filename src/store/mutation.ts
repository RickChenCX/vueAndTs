import * as types from "./mutation-type";
import { MutationTree } from 'vuex'
import {State} from "./states";

const mutations: MutationTree<any> = {
  [types.SET_NAME](state, payload) {
    state.username = payload;
    console.log(state)

  },
}
export default mutations
