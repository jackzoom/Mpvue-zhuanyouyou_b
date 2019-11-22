import {
  login,
  get,
  post
} from '@/utils/request'
export function UserLogin(data) {
  return login({
    url: '/oauth/token',
    data
  })
}
