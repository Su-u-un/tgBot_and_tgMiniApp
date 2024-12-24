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
  updateInfo: (data) => request.post('/update',data),
  // 升级点击属性，传入id，数据库内部查询是否满足cost，不满足就返回错误
  // 满足就扣除数据库的功德值，并且更新用户表内的点击属性
  updateClick: (data) => request.get('/updateClick', {
    params: data
  }),
}
