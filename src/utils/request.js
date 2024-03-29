// import qs from 'qs'
import Base64 from 'Base64'
import config from './config'
import Fly from 'flyio/dist/npm/wx';
let fly = new Fly;
fly.config.timeout = 20000;
// //设置请求基地址
// fly.config.baseURL = config.base
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  // request.headers["jm_token"] = "jackzoom_token";
  request.headers["Authorization"] = "Basic " + Base64.btoa("client:secret")
  request.headers.contentType = 'application/json'
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  console.log("请求拦截：", request);
  return request;
})
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.resolve("Request Error")
  }
)
export const login = function (opts) {
  return fly.request({
    baseURL: config.login,
    url: opts.url,
    method: 'post',
    params: opts.data
  })
  // return fly.post(opts.url, opts.data)
}
/**
 * GET 请求
 * @param {*} opts 
 */
export const get = function (opts) {
  let defaults = {
    baseURL: config.base,
    url: opts.url,
    method: 'get',
    params: opts.data
  };
  return fly.request(defaults)
  // return fly.get(opts.url, opts.data)
}
/**
 * POST 请求
 * @param {*} opts 
 */
export const post = function (opts) {
  let defaults = {
    baseURL: config.base,
    url: opts.url,
    method: 'post',
    body: opts.data
  };
  return fly.request(defaults)
  // return fly.post(opts.url, opts.data)
}

export {
  fly
}
