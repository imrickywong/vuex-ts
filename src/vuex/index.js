'use strict'

import { installGetter } from './getter'
import { installMutation } from './mutation'
import { installAction } from './action'

let Vue = null

class Store {
  constructor(data) {
    let { state, getters, mutations, actions } = data
    this.getters = {}
    this.mutations = {}
    this.actions = {}
    // vuex的核心就是借用vue的响应式数据监听
    this._vm = new Vue({
      data: {
        state
      }
    })
    installGetter.call(this, getters, state)
    installMutation.call(this, mutations, state)
    installAction.call(this, actions)

    const { commit, dispatch } = this // 先存一份，避免this.commit会覆盖原型上的this.commit
    // 调用原型的对应函数
    this.commit = type => {
      commit.call(this, type)
    }
    this.dispatch = type => {
      dispatch.call(this, type)
    }
  }
  // 访问state对象时候，就直接返回响应式的数据
  get state() {
    return this._vm.state
  }
  // commi调用
  commit(type) {
    this.mutations[type]()
  }
  // dispatch调用
  dispatch(type) {
    this.actions[type]()
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
