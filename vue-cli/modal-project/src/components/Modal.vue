<template>
<!-- Event Modifierの設定方法
@clickのあとに.selfとするとその要素のみにイベントが適用される -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale'}">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // 親から値を受け取るprops
  props:['header', 'text', 'theme'],
  methods: {
    closeModal() {
      // emitの中に好きな名前をつけることで親コンポーネントでclickイベントのようなイベントのように使うことができる
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background-color: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  h1 {
    color: #02cfb4;
    border:none;
    padding: 0;
  }
  .modal.sale {
    background-color: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
</style>