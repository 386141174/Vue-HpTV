import request from '@/utils/request'

export function queryVideo(params) {
  return request({
    url: '/video/query',
    method: 'get',
    params
  })
}

export function queryRecommend(params) {
  return request( {
    url: '/order/recommend',
    method: 'get',
    params
  })
}

export function queryifBuy(params) {
  return request( {
    url: '/order/ifBuy',
    method: 'get',
    params
  })
}

export function selectByVideoType(videoType) {
  return request( {
    url:'video/selectByVideoType',
    method:'get',
    params:{videoType}
  })
}

export function teacherVideo(teachername) {

  return request( {
    url:'video/queryTeacherVideo',
    method:'get',
    params:{teachername}
  })
}

export function deleteVideo(videoId) {
  return request ( {
    url:'video/deleteVideo',
    method:'get',
    params:{videoId}
  })
}

export function replay(params) {
  return request( {
    url:'video/replay',
    method:'get',
    params
  })
}
