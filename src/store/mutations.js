import * as type from './mutation-types'
const mutations = {
  [type.SET_MPVUEINFO](state, mpvueInfo) { // eslint-disable-line
    state.mpvueInfo = mpvueInfo
  },

  [type.SET_DETAILURL](state, url) { // eslint-disable-line
    state.detailUrl = url
  },

  [type.SET_ERRORLOG](state, errorInfo) { // eslint-disable-line
    state.reqError = state.reqError.concat(errorInfo)
  }
}

export default mutations
