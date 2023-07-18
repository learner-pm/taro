import Taro from "@tarojs/taro"
import { shouldBeFunction } from "src/utils"

export const onLocationChange: typeof Taro.onLocationChange = (callback) => {
  const name = 'onLocationChange'
  // callback must be an Function
  const isObject = shouldBeFunction(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on location change')
  // @ts-ignore
  const ret = native.onLocationChange(callback)
  return ret
}
