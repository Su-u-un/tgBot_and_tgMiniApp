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
  updateInfo: (data) => request.post('/update',data),
  // 做tg任务
  joinTg: (data) => request.get('/joinTg',{
    params:data
  }),
  // 做x任务
  followX: (data) => request.get('/followX',{
    params:data
  }),
  // 活跃任务
  today: (data) => request.get('/today',{
    params:data
  }),
  // 重置活跃任务
  resetToday: (data) => request.get('/resetToday',{
    params:data
  }),
  // 升级click
  upgradeClick: (data) => request.get('/upgradeClick',{
    params:data
  }),
  // 升级体力值上限
  upgradeLimit: (data) => request.get('/upgradeLimit',{
    params:data
  }),
  // 体力值回满-1
  heal: (data) => request.get('/heal',{
    params:data
  }),
  // 抽奖次数-1
  bless: (data) => request.get('/bless',{
    params:data
  }),
  // 重置功德值回满
  resetHeal: (data) => request.get('/resetHeal',{
    params:data
  }),
  // 重置抽奖次数
  resetBless: (data) => request.get('/resetBless',{
    params:data
  })
}
