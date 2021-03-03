<template>
  <!-- App.vue root component -->
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <!-- // 親コンポーネントでは、closeが発動したらどうしたいのかを書く。
    今回の場合modalを閉じたいのでtoggleModalを渡す -->
    <!-- イベントが伝搬しているので背景をクリックしてもその子要素をクリックしてもmodalが反応するので、Event Modifierを設定する -->
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
  </div>
  <!-- Event Modifierの設定方法
  @clickの後に.rightの形で続ける。
  .rightは右クリックしたら、.shiftはshiftキープラスクリックしたら -->
  <button @click.shift="toggleModal">Open Modal(shift)</button>
  <hr />
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
</template>

<script>
import Modal from './components/Modal';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      header: 'ヘッダー部分',
      text: 'ここにテキスト',
      showModal: false
    };
  },
  methods: {
    handleClick(e) {
      console.log(this.$refs.name); //ref="name"の入っている<input type="text">が出力される
      this.$refs.name.classList.add('active'); //activeクラスを付与する
      this.$refs.name.focus(); //clickしたらref="name"にfocusする
    },
    toggleModal() {
      this.showModal = !this.showModal;
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
