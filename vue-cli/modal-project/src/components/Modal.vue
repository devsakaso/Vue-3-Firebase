<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale'}">
  <!-- slotを利用することで、再利用可能なコンポーネントを作成できる -->
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 親から値を受け取るprops
  props:['theme'],
  methods: {
    closeModal() {
      // emitの中に好きな名前をつけることで親コンポーネントでclickイベントのようなイベントのように使うことができる
      this.$emit('close')
    }
  }
}
</script>

<style>
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
  .modal h1 {
    color: #02cfb4;
    border:none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
  .modal.sale {
    background-color: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
  .modal.sale .actions {
    color: white;
  }
  .modal.sale .actions a {
    color: white;
  }
</style>