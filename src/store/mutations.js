import * as types from './mutation-types'

const mutations = {
  // [方法名](参数1,参数2...){方法}
  [types.SET_USER_TOKEN](state, token) {
    state.token = token
  },
  [types.SET_LANGUAGE](state, lang) {
    state.lang = lang;
  }
}

export default mutations;
