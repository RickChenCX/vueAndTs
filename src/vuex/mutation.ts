import * as types from "./mutation-type";

export default {
  [types.SET_NAME](state: any, name: any) {
    state.name = name;
  },
  [types.SET_AGE](state: any, age: any) {
    state.age = age;
  }
};
