<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <!-- 上の書き方でも下の書き方でもOKに -->
    <!-- 上の書き方はindex.jsに記述されているpathプロパティとリンクさせている -->
    <!-- 下の書き方はindex.jsに記述されているnameプロパティとリンクさせている。メリットとしては、pathが変わっても大丈夫な点。 -->
    <!-- aタグはserverにすべての情報を取りに行くけど、router-linkならページ遷移のみなのでとても早い -->
    <router-link :to="{name: 'About'}">About</router-link>
    <router-link :to="{name: 'Jobs'}">Jobs</router-link>
  </div>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  <!-- 下の部分がHomeならHome,AboutならAboutのrouterに変わる -->
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'Home'})//index.jsに書いたnameを記述する
    },
    back() {
      this.$router.go(-1)//go()メソッドは正負の整数を引数にとる。-1で一つ戻る、-2なら2つ戻る
    },
    forward() {
      this.$router.go(1)//先に1つ進む
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
