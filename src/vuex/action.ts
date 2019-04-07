import * as types from "./mutation-type";
import { Commit, Action, ActionTree } from 'vuex'
import {State} from "./states";

// export default {
//   nameAsyc(context: { commit: Commit}, username: string) {
//     context.commit(types.SET_NAME, username);
//     // commit(types.SET_AGE, age);
//   }
// };

const nameAsyc: Action<State, any> =  (context: { commit: Commit }, username: string) => {
  context.commit(types.SET_NAME, username)
}
const actions: ActionTree<State, any> = {
  nameAsyc,
}
export default actions
