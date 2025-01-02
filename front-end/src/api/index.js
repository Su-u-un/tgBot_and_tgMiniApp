import { request } from '../utils/http'

export default {
  // 获取用户id
  getUser: (data) => request.get('/getUser',{
    params:data
  }),
  // 获取用户功德体力
  getInfo: (data) => request.get('/getInfo',{
    params:data
  }),
  // 获取用户任务状态
  getTask: (data) => request.get('/getTask',{
    params:data
  }),
  // 更新用户功德体力
  updateInfo: (data) => request.get('/update',data),
  // 做tg任务
  joinTg: (data) => request.get('/joinTg',{
    params:data
  }),
  // 做x任务
  followX: (data) => request.get('/followX',{
    params:data
  })
}
