import { GetterTree, Getter } from 'vuex'
import { State } from "./states";

const username: Getter<State, any> = (state: State) => {
  console.log(state)
  return state.username;
}
const getterTree: GetterTree<State, any> = {
  username,
}
export default getterTree
