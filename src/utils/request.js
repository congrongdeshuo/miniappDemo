// 由于现在ajax以及axios以来window对象的xmlHttpRequest api但是小程序是不支持的所以建议使用flyio发送http请求以及请求拦截等功能
// API文档： https://wendux.github.io/dist/#/doc/flyio/readme
/* eslint-disable*/
var Fly = require('flyio/dist/npm/wx');
var qs = require('qs');
import store from '../store';
var fly = new Fly;

var config = {
    host: 'localhost'
}

//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["X-Tag"]="flyio";
      //打印出请求体
      console.log(request.body)
      //终止请求
      //var err=new Error("xxx")
      //err.request=request
      //return Promise.reject(new Error(""))
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
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
        //return Promise.resolve("ssss")
        store.commit('errlogReport', err)
    }
)

// 通用的get请求
export const get = (params) => {
  return fly.get(`${config.host}${params.url}`, qs.stringify(params.data))
}

// 通用的post请求
export const post = (params) => {
  return fly.post(`${config.host}${params.url}`, qs.stringify(params.data))
}

export default fly