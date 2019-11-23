import * as types from './mutation-types'
import {
  UserLogin
} from '@/api/user'
// 进行涉及到多个全局变量的复杂计算

// export const setOpenId = ({ commit }, { id }) => {
//     commit(types.OPEN_ID, id)
// }
export default {
  setLanguage: ({
    commit
  }, lang) => {
    commit('SET_LANGUAGE', lang)
  },
  UserLogin: ({
    commit
  }, data) => {
    return new Promise((resolve, reject) => {
      UserLogin(data).then((result) => {
        if (result.access_token) {
          resolve(result)
          commit('SET_USER_TOKEN', result.access_token)
        } else {
          reject(result);
        }
      }).catch((err) => {
        reject(err);
      });
    })
  }
}
