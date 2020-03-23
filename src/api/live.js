import request from '@/utils/request'

export function getliveType(username) {
  return request ({
    url: '/live/getLiveType',
    method: 'get',
    params:{username}
  })
}
export function queryBuyLive(params) {
  return request ({
    url: '/live/queryBuyLive',
    method: 'get',
    params
  })
}

export function queryStudentCourse(username) {
  return request( {
    url:'live/queryStudentCourse',
    method:'get',
    params:{username}
  })
}
