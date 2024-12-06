import { request } from '../utils/http'

export default {
  // 获取用户功德体力
  getInfo: () => request.post('/info',{
    id:1
  })
  // 更新用户功德体力
  updateInfo: (data) => request.post('/update',data)
}
