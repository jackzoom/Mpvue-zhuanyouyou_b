// 用gettter取数据到组件里,是数据的映射

// // getter可充当计算属性
// export const currentSong = (state) => {
//     return state.playlist[state.currentIndex] || {}
// }
export default {
  token: state => state.token,
  lang: state => state.lang,
  T: state => state.T
}
