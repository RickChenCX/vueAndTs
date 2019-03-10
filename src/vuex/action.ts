import * as types from "./mutation-type";

export default {
  nameAsyc({ commit }: any, { name, age }: any) {
    commit(types.SET_NAME, name);
    commit(types.SET_AGE, age);
  }
};
