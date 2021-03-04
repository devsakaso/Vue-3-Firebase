<template>
  <h1>Reaction Timer</h1>
  <!-- v-bind:disabled="isPlaying"はtrueのときdisabledにする -->
  <button @click="start" v-bind:disabled="isPlaying">スタート</button>
  <Block v-if="isPlaying" v-bind:delay="delay" @end="endGame" />
  <Results v-if="showResults" v-bind:score="score" />
</template>

<script>
// Block.vueを使うには、
// 1. importして
// 2. componentsにBlockを加えて
// 3. templateタグでBlockタグを使う
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null, //reactionTimeを受け取りたいので格納する変数を作る
      showResults: false
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 3000;
      this.isPlaying = true;
      this.showResults = false;
    },
    // Gameを終わらせる
    // $emitの第二引数で渡される値を引数で受け取る
    // reactionTimeを表示するのと、isPlayingをfalseに戻す
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
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
  color: #444;
  margin-top: 60px;
}
button {
  background-color: #31b0c7;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
