import request from '../commons/request'

export function getFiles () {
  return request({
    url: '/getList/file',
    method: 'get'
  })
}

export function uploadFile (data) {
  return request({
    url: '/upload/file',
    data,
    method: 'post'
  })
}

export function getList (data) {
  return request({
    url: '/api/list',
    data,
    method: 'post'
  })
}
