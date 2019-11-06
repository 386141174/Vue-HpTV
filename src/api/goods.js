import request from '@/utils/request'

export function createGoods(formdata) {
  return request({
    url: '/goods/createGoods',
    method: 'post',
    data:formdata
  })
}

export function showGoods() {
  return request({
    url: '/goods/showGoods',
    method: 'get',
  })
}

export function activeFinish() {
  return request({
    url:'/order/activeFinsh',
    method:'get'
  })
}

export function createOrder(formdata) {
  return request({
    url:'/order/createOrder',
    method:'post',
    data:formdata
  })
}
