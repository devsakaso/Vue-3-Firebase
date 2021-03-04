<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    クリック
  </div>
</template>

<script>
export default {
  props: ['delay'], //App.vueから受け取る
  data() {
    return {
      // blockはスタート押したら表示したいのでデフォルトがfalseになるように設定
      showBlock: false,
      timer: null, //10ずつ増やす
      reactionTime: 0 //これを増やしてカウントしていく
    };
  },
  // Lifecycle Diagramの一つのmounted()
  // mountedは要するにsetTimeoutの関数が実行されるとき
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  // クリックが現れてからクリックされるまでの時間を測りたい
  // timerをstartとstopしたいのでmethodsを作成する
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
        console.log(this.timer);
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      //App.vue(親)でreactionTimeを受け取りたい
      // $emitは第一引数に好きな名前、第二引数に渡したいデータ
      this.$emit('end', this.reactionTime);
    }
  }
};
</script>

<style>
.block {
  width: 300px;
  font-size: 1.6em;
  border-radius: 20px;
  background-color: #31b0c7;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
