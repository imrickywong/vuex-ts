import { feach } from './utils'

export function installGetter(getters, state) {
  feach(getters, (getterName, getterFn) => {
    // 对this.getters对象进行包装，和vue的computed是差不多的
    // 例如 this.getters['newCount'] = fn(state)
    // 执行 this.getters['newCount']()就会返回计算的数据啦
    Object.defineProperty(this.getters, getterName, {
      get: () => getterFn(state)
    })
  })
}
