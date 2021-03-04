<template>
  <!-- こちらをテレポートさせる -->
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">サインイン</a>
        <a href="#">もっと詳しく</a>
      </template>
      <h1>タイトル</h1>
      <p>サブタイトル</p>
    </Modal>
  </div>
  <!-- こちらは通常通り#appに出力する -->
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <p>これが作成したボタン２</p>
      <h1>タイトル</h1>
      <p>サブタイトル</p>
    </Modal>
  </div>
  <button @click.shift="toggleModal">Open Modal(shift)</button>
  <button @click.alt="toggleModalTwo">Open ModalTwo(alt)</button>
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
      showModal: false,
      showModalTwo: false
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
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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
