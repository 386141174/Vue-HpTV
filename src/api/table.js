import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
export function creatRoom(formData) {
  return request({
    url:'/live/create',
    method: 'post',
    data:formData,
    headers: {
      'content-type': 'multipart/form-data',
      'processData':false,
      'cache': false
    }
  })
}

export function selectRoom(username) {
  return request({
    url:'/live/selectRoom',
    method:'get',
    params: { username }
  })
}

export function updateRoom(formData) {
  return request({
    url:'/live/updateRoom',
    method:'post',
    data:formData,
    headers: {
      'content-type': 'multipart/form-data',
      'processData':false,
      'cache': false
    }
  })
}

export function selectListRoom() {
  return request({
    url:'/live/selectListRoom',
    method:'get'
  })

}
