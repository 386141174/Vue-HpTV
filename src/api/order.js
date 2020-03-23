import request from '@/utils/request'

export function payOrder(params) {
  return request({
    url: '/order/pay',
    method: 'get',
    params
  })
}

export function losePay() {
  return request( {
    url: 'order/losePay',
    method: 'get'
  })
}

export function drawback(params) {
  return request( {
    url:'order/drawback',
    method:'post',
    params
  })
}

export function myStudent(teacher) {

  return request ( {
    url:'order/queryStudentInfo',
    method:'get',
    params:{teacher}
  })
}
