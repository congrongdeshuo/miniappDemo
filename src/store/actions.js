import request from '../utils/request'

export const test = async ({state, getters, dispatch, commit}, {info}) => {
  console.log(state, info)
  request.get('/getVueInfo', {}).then(res => {
    console.log(res)
  })
}

// 非微信登录

// 业务接口

// 异步处理