import axios from 'axios'
import Qs from 'qs'

var instance = axios.create()

instance.defaults.timeout = 10 * 1000 // 超时时间
instance.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded'

// 请求发出拦截
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 请求接受拦截
instance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        window.location.href = '/login'
    }
  }
  return Promise.resolve(error.response)
})
function successState (res) {
  if (res.code !== '0') {
  }
}
const Axios = (opts) => {
  let httpDefaultOpts = {
    method: opts.method || 'get',
    baseURL: '/app',
    url: opts.url,
    params: opts.data || {},
    data: Qs.stringify(opts.data) || {},
    headers: opts.headers
  }
  if (opts.method === 'get' || opts.method === 'delete') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }
  let promise = new Promise((resolve, reject) => {
    instance(httpDefaultOpts).then(
      (res) => {
        successState(res)
        resolve(res)
      }
    ).catch(
      (response) => {
        reject(response)
      }
    )
  })
  return promise
}
export default Axios
