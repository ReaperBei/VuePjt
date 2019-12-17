import sendaxios from './axios.js'
// 首页请求接口
// 轮播图 人民小酒 新闻动态 新闻动态轮播newscar 企业优势 友情合作
let homeimg = function (callback) {
  sendaxios('get', 'homeimg').then((res) => {
    callback(res)
  })
}
let list = function (callback) {
  sendaxios('get', 'lists').then((res) => {
    callback(res)
  })
}
let homenews = function (callback) {
  sendaxios('get', 'homenews').then((res) => {
    callback(res)
  })
}
let newscar = function (callback) {
  sendaxios('get', 'newscar').then((res) => {
    callback(res)
  })
}
let homebst = function (callback) {
  sendaxios('get', 'homebst').then((res) => {
    callback(res)
  })
}
let homelks = function (callback) {
  sendaxios('get', 'homelks').then((res) => {
    callback(res)
  })
}
// 关于我们tab 企业概述 品牌故事 资质荣誉 资质视频
let summtab = function (callback) {
  sendaxios('get', 'summtab').then((res) => {
    callback(res)
  })
}
let summarize = function (callback) {
  sendaxios('get', 'summarize').then((res) => {
    callback(res)
  })
}
let brand = function (callback) {
  sendaxios('get', 'brand').then((res) => {
    callback(res)
  })
}
let honor = function (callback) {
  sendaxios('get', 'honor').then((res) => {
    callback(res)
  })
}
let video = function (callback) {
  sendaxios('get', 'video').then((res) => {
    callback(res)
  })
}
// 产品中心tab 全部 人名小酒 藏龙液 小锅酒 其他
let tabtotal = function (callback) {
  sendaxios('get', 'tabtotal').then((res) => {
    callback(res)
  })
}
let total = function (callback) {
  sendaxios('get', 'total').then((res) => {
    callback(res)
  })
}
let bistro = function (callback) {
  sendaxios('get', 'bistro').then((res) => {
    callback(res)
  })
}
let liquid = function (callback) {
  sendaxios('get', 'liquid').then((res) => {
    callback(res)
  })
}
let alveolus = function (callback) {
  sendaxios('get', 'alveolus').then((res) => {
    callback(res)
  })
}
let rests = function (callback) {
  sendaxios('get', 'rests').then((res) => {
    callback(res)
  })
}
// 网上商城 shopping
let shopping = function (callback) {
  sendaxios('get', 'shopping').then((res) => {
    callback(res)
  })
}
// 新闻中心 行业动态 媒体聚焦 市场活动
let company = function (callback) {
  sendaxios('get', 'company').then((res) => {
    callback(res)
  })
}
let industry = function (callback) {
  sendaxios('get', 'industry').then((res) => {
    callback(res)
  })
}
let bazaar = function (callback) {
  sendaxios('get', 'bazaar').then((res) => {
    callback(res)
  })
}
let media = function (callback) {
  sendaxios('get', 'media').then((res) => {
    callback(res)
  })
}
// 服务支持tab 招商加盟 联系我们
let serve = function (callback) {
  sendaxios('get', 'serve').then((res) => {
    callback(res)
  })
}
let merchants = function (callback) {
  sendaxios('get', 'merchants').then((res) => {
    callback(res)
  })
}
let relation = function (callback) {
  sendaxios('get', 'relation').then((res) => {
    callback(res)
  })
}
export {
  homeimg,
  list,
  homenews,
  newscar,
  homebst,
  homelks,
  summtab,
  summarize,
  brand,
  honor,
  video,
  tabtotal,
  total,
  bistro,
  liquid,
  alveolus,
  rests,
  shopping,
  company,
  industry,
  bazaar,
  media,
  serve,
  merchants,
  relation
}
