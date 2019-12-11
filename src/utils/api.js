/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
let axiosInstance = axios.create()
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const getAxiosInstance = () => {
  return axiosInstance
}
export const setAxiosInstance = ($axiosInstance) => {
  axiosInstance = $axiosInstance
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  } else {
    return axiosInstance[method](queryUrl, form, config)
  }
}
export const user = {}
export const news = {}
export const transfer = {}
export const requires = {}
export const achieves = {}
export const comments = {}
export const web = {}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * user login
 * request: userLogin
 * @param username - phone number or email
 * @param password - password
 */
const userLogin = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['username'] !== undefined) {
    form['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    form['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
user.userLogin = userLogin
/**
 * user register
 * request: userRegister
 * @param type - 个人 1 企业 2
 * @param username - username
 * @param companyName - 公司名
 * @param phone - phone number
 * @param email - email
 * @param code - email收到的验证码
 * @param password - password
 * @param license - password
 */
const userRegister = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/register'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['type'] !== undefined) {
    form['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['username'] !== undefined) {
    form['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['companyName'] !== undefined) {
    form['companyName'] = parameters['companyName']
  }
  if (parameters['companyName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: companyName'))
  }
  if (parameters['phone'] !== undefined) {
    form['phone'] = parameters['phone']
  }
  if (parameters['phone'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: phone'))
  }
  if (parameters['email'] !== undefined) {
    form['email'] = parameters['email']
  }
  if (parameters['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  if (parameters['code'] !== undefined) {
    form['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['password'] !== undefined) {
    form['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters['license'] !== undefined) {
    form['license'] = parameters['license']
  }
  if (parameters['license'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: license'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
user.userRegister = userRegister
/**
 * user reset password
 * request: userResetPassword
 * @param email - email
 * @param code - 邮箱收到的验证码
 * @param newPassword - new password
 */
const userResetPassword = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/resetPsw'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['email'] !== undefined) {
    form['email'] = parameters['email']
  }
  if (parameters['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  if (parameters['code'] !== undefined) {
    form['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['newPassword'] !== undefined) {
    form['newPassword'] = parameters['newPassword']
  }
  if (parameters['newPassword'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: newPassword'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
user.userResetPassword = userResetPassword
/**
 * user send email code
 * request: userSendEmailCode
 * @param email - email
 */
const userSendEmailCode = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sendEmailCode'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['email'] !== undefined) {
    form['email'] = parameters['email']
  }
  if (parameters['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
user.userSendEmailCode = userSendEmailCode
/**
 * List news
 * request: listNews
 * @param page - page
 * @param limit - How many items to return at one time (max 100)
 * @param type - type of news(政策新闻policy, 科研动态tech, 活动新闻 activity,国家政策county, 地区政策region, 学校政策school)
 * @param orders - sort option of list(clicks)
 * @param title - keywords to search
 */
const listNews = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/news'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['page'] !== undefined) {
    queryParameters['page'] = parameters['page']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['orders'] !== undefined) {
    queryParameters['orders'] = parameters['orders']
  }
  if (parameters['title'] !== undefined) {
    queryParameters['title'] = parameters['title']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
news.listNews = listNews
/**
 * get news by id
 * request: getNews
 * @param id - news id
 */
const getNews = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/news/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
news.getNews = getNews
/**
 * List transfer
 * request: listTransfer
 * @param limit - How many items to return at one time (max 100)
 * @param page - offset
 * @param industry - 行业领域
 * @param method - 合作方式
 * @param region - 地区
 * @param orders - sort option of list(clicks)
 * @param title - keywords to search
 */
const listTransfer = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/transfer'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['page'] !== undefined) {
    queryParameters['page'] = parameters['page']
  }
  if (parameters['industry'] !== undefined) {
    queryParameters['industry'] = parameters['industry']
  }
  if (parameters['method'] !== undefined) {
    queryParameters['method'] = parameters['method']
  }
  if (parameters['region'] !== undefined) {
    queryParameters['region'] = parameters['region']
  }
  if (parameters['orders'] !== undefined) {
    queryParameters['orders'] = parameters['orders']
  }
  if (parameters['title'] !== undefined) {
    queryParameters['title'] = parameters['title']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
transfer.listTransfer = listTransfer
/**
 * get transfer info by id
 * request: getTransfer
 * @param id - transfer id
 */
const getTransfer = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/transfer/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
transfer.getTransfer = getTransfer
/**
 * List require
 * request: listRequires
 * @param limit - How many items to return at one time (max 100)
 * @param page - offset
 * @param industry - 行业领域
 * @param method - 合作方式
 * @param region - 地区
 * @param orders - sort option of list(clicks)
 * @param title - keywords to search
 */
const listRequires = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/requires'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['page'] !== undefined) {
    queryParameters['page'] = parameters['page']
  }
  if (parameters['industry'] !== undefined) {
    queryParameters['industry'] = parameters['industry']
  }
  if (parameters['method'] !== undefined) {
    queryParameters['method'] = parameters['method']
  }
  if (parameters['region'] !== undefined) {
    queryParameters['region'] = parameters['region']
  }
  if (parameters['orders'] !== undefined) {
    queryParameters['orders'] = parameters['orders']
  }
  if (parameters['title'] !== undefined) {
    queryParameters['title'] = parameters['title']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
requires.listRequires = listRequires
/**
 * get require info by id
 * request: getRequire
 * @param id - require id
 */
const getRequire = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/requires/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
requires.getRequire = getRequire
/**
 * List achieves
 * request: listAchieves
 * @param limit - How many items to return at one time (max 100)
 * @param page - offset
 * @param industry - 行业领域
 * @param method - 合作方式
 * @param region - 地区
 * @param patentType - 地区
 * @param orders - sort option of list(clicks)
 * @param title - keywords to search
 */
const listAchieves = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/achieves'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['page'] !== undefined) {
    queryParameters['page'] = parameters['page']
  }
  if (parameters['industry'] !== undefined) {
    queryParameters['industry'] = parameters['industry']
  }
  if (parameters['method'] !== undefined) {
    queryParameters['method'] = parameters['method']
  }
  if (parameters['region'] !== undefined) {
    queryParameters['region'] = parameters['region']
  }
  if (parameters['patentType'] !== undefined) {
    queryParameters['patentType'] = parameters['patentType']
  }
  if (parameters['orders'] !== undefined) {
    queryParameters['orders'] = parameters['orders']
  }
  if (parameters['title'] !== undefined) {
    queryParameters['title'] = parameters['title']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
achieves.listAchieves = listAchieves
/**
 * get achieves info by id
 * request: getAchieve
 * @param id - achieves id
 */
const getAchieve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/content/achieves/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
achieves.getAchieve = getAchieve
/**
 * post achieve comment
 * request: postAchieveComment
 * @param achieveId - achieve id to comment
 * @param comments - comments content
 * @param accessToken - user token
 * @param code - captcha code
 */
const postAchieveComment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sign/addAchieveComments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['achieveId'] !== undefined) {
    form['achieveId'] = parameters['achieveId']
  }
  if (parameters['achieveId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: achieveId'))
  }
  if (parameters['comments'] !== undefined) {
    form['comments'] = parameters['comments']
  }
  if (parameters['comments'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: comments'))
  }
  if (parameters['accessToken'] !== undefined) {
    form['access_token'] = parameters['accessToken']
  }
  if (parameters['code'] !== undefined) {
    form['code'] = parameters['code']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
comments.postAchieveComment = postAchieveComment
/**
 * post require comment
 * request: postRequireComment
 * @param requireId - require id to comment
 * @param comments - comments content
 * @param accessToken - user token
 * @param name - name
 * @param phone - phone
 * @param email - email
 * @param address - address
 * @param code - captcha code
 */
const postRequireComment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sign/addRequireComments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['requireId'] !== undefined) {
    form['requireId'] = parameters['requireId']
  }
  if (parameters['requireId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: requireId'))
  }
  if (parameters['comments'] !== undefined) {
    form['comments'] = parameters['comments']
  }
  if (parameters['comments'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: comments'))
  }
  if (parameters['accessToken'] !== undefined) {
    form['access_token'] = parameters['accessToken']
  }
  if (parameters['name'] !== undefined) {
    form['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['phone'] !== undefined) {
    form['phone'] = parameters['phone']
  }
  if (parameters['phone'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: phone'))
  }
  if (parameters['email'] !== undefined) {
    form['email'] = parameters['email']
  }
  if (parameters['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  if (parameters['address'] !== undefined) {
    form['address'] = parameters['address']
  }
  if (parameters['address'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: address'))
  }
  if (parameters['code'] !== undefined) {
    form['code'] = parameters['code']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
comments.postRequireComment = postRequireComment
/**
 * post web comment
 * request: postWebComment
 * @param comments - comments content
 * @param token - user token
 * @param name - name
 * @param phone - phone
 * @param email - email
 * @param code - captcha code
 */
const postWebComment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/addWebComments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['comments'] !== undefined) {
    form['comments'] = parameters['comments']
  }
  if (parameters['comments'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: comments'))
  }
  if (parameters['token'] !== undefined) {
    form['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    form['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['phone'] !== undefined) {
    form['phone'] = parameters['phone']
  }
  if (parameters['phone'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: phone'))
  }
  if (parameters['email'] !== undefined) {
    form['email'] = parameters['email']
  }
  if (parameters['email'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: email'))
  }
  if (parameters['code'] !== undefined) {
    form['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
comments.postWebComment = postWebComment
/**
 * list dict info from backend
 * request: listAllDict
 */
const listAllDict = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/dict/listAllDict'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
web.listAllDict = listAllDict
/**
 * list category info from backend
 * request: listAllCategory
 */
const listAllCategory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cat/listAllCategory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
web.listAllCategory = listAllCategory
/**
 * get home page Friends Links
 * request: getFriendsLinks
 */
const getFriendsLinks = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/linkList'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
web.getFriendsLinks = getFriendsLinks
/**
 * get home page carousel News info
 * request: getCarouselNewsInfo
 */
const getCarouselNewsInfo = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/pageList'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
web.getCarouselNewsInfo = getCarouselNewsInfo
/**
 * get home page recommend News info
 * request: getRecommendNewsInfo
 */
const getRecommendNewsInfo = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/contentRecommendList'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
web.getRecommendNewsInfo = getRecommendNewsInfo