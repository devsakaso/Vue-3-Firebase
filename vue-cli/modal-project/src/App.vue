<template>
  <h1>{{ title }}</h1>
  <hr>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App'
    };
  },
  methods: {
    handleClick(e) {
      console.log(this.$refs.name);//ref="name"の入っている<input type="text">が出力される
      this.$refs.name.classList.add('active') //activeクラスを付与する
      this.$refs.name.focus() //clickしたらref="name"にfocusする
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
