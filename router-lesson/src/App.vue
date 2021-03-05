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
  <!-- 下の部分がHomeならHome,AboutならAboutのrouterに変わる -->
  <router-view/>
</template>

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
</style>
