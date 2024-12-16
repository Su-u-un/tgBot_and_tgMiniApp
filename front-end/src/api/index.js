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
  // 更新用户功德体力
  updateInfo: (data) => request.post('/update',data)
}
