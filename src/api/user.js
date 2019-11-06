import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/user/login',
    method: 'post',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getVideo() {
  return request({
    url: '/video/selectVideo',
    method: 'post'
  })
}

export function setVideo(formdata) {
  return request({
    url: '/video/uploadFile',
    method: 'post',
    data:formdata
  })
}

export function rtmp(roomNumber) {
  return request({
    url:'/live/getRtmp',
    method:'get',
    params: {roomNumber}
  })
}
