<template>
  <div id="app">
    <h3>{{ this.$store.state.msg }}</h3>
    <p>
      <span>state.count: </span>
      {{ this.$store.state.count }}
    </p>
    <p>
      <span>getters</span>
      {{ count }}
    </p>
    <div>
      <span>提交commit触发mutation</span>
      <button @click="commit">mutation</button>
    </div>
    <div>
      <span>提交dispatch触发action</span>
      <button @click="dispatch">dispatch</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count() {
      return this.$store.getters.count
    }
  },
  methods: {
    commit() {
      this.$store.commit('change')
    },
    dispatch() {
      this.$store.dispatch('change')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto;
  width: 400px;
  color: #2c3e50;
}
</style>
