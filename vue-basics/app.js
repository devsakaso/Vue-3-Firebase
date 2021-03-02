const app = Vue.createApp({
  // data, functions
  data() {
    return {
      title: "タイトル",
      author: "著者名",
      age: 32,
      showBooks: true,
      x: 0, // mousemove用
      y: 0, // mousemove用
    };
  },
  methods: {
    // 単純なクリックイベントの関数
    changeTitle(title) {
      this.title = title;
    },
    // トグルしたい場合、リバースするために!をつける
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    // 第一引数にevent情報、第二引数にオプショナルなデータを受け取る
    // eにevent情報が格納されている
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      // offsetはeの情報をコンソールで確認できる
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },
});

// mountで指定した範囲内でしかvueは動かない
app.mount("#app");
