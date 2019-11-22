const env = process.env.NODE_ENV;
let Doman = {
  development: {
    login: 'https://zhuanyoyo.95cfun.cn/back/oauth',
    base: 'https://zhuanyoyo.95cfun.cn/back/merchant'
  },
  production: {
    login: 'https://www.95cfun.cn/back/oauth',
    base: 'https://www.95cfun.cn/back/merchant'
  }
}
module.exports = {
  login: Doman[env].login,
  base: Doman[env].base
}
