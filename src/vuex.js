'use strict'

let Vue = null

class Store {
  constructor(options) {
    let { state } = options
    this.getters = {}
    this.mutations = {}
    this.actions = {}
    // vuex的核心就是借用vue的响应式数据监听
    this._vm = new Vue({
      data: {
        state
      }
    })
  }
  // 访问state对象时候，就直接返回响应式的数据
  get state() {
    return this._vm.state
  }
}
// Vue.use(Vuex) 调用 install 函数
const install = _Vue => {
  // 避免vuex重复安装
  if (Vue === _Vue) return
  Vue = _Vue
  Vue.mixin({
    // 通过mixins让每个组件实例化的时候都会执行下面的beforeCreate
    beforeCreate() {
      if (this.$options && this.$options.store) {
        // 只有根节点才有store配置, 仅会定义一次
        this.$store = this.$options.store
      } else if (this.$parent && this.$parent.$store) {
        this.$store = this.$parent.$store
      }
    }
  })
}

export default { install, Store }
