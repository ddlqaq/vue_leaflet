import request from '@/utils/ddlrequest'

export function getStudents () {
  return request({
    url: '/students/',
    method: 'get'
  })
}

export function queryStudents (inputstr) {
  return request({
    url: '/students/query/',
    method: 'post',
    data: {
      inputstr
    }
  })
}
