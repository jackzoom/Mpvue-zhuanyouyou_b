import zhLocal from './modules/zh-cn'
import enLocal from './modules/en-us'
let i18n = {
  locale: 'zh-CN', // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': {
      ...zhLocal
    }, // 中文语言包
    'en-US': {
      ...enLocal
    } // 英文语言包
  }
}
export default i18n
