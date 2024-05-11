import request from '@/utils/request'

// 请求token
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
