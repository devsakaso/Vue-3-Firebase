<template>
  <!-- .preventをつけて送信したときにブラウザ遷移しないようにする -->
  <form @submit.prevent="handleSubmit">
    <label>Email: </label>
    <!-- v-modelを使うことで双方向 (two-way) データバインディングを作成できる -->
    <input type="email" required v-model="email" />

    <label>Password: </label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="frontend">フロントエンド開発者</option>
      <option value="backend">バックエンド開発者</option>
      <option value="designer">Webデザイナー</option>
    </select>

    <!-- <label>スキル:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div> -->

    <label>Skills (ctrl + コンマで追加):</label>
    <input type="text" v-model="tempSkill" @keyup.ctrl="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>以下内容を確認しました。</label>
    </div>

    <h4>チェックボックス複数選択</h4>
    <div>
      <input type="checkbox" value="name1" v-model="names" />
      <label>名前1</label>
    </div>
    <div>
      <input type="checkbox" value="name2" v-model="names" />
      <label>名前2</label>
    </div>
    <div>
      <input type="checkbox" value="name3" v-model="names" />
      <label>名前3</label>
    </div>

    <div class="submit">
      <button>アカウントを作成</button>
    </div>
  </form>
  <!-- v-modelなので入力したと同時に出力が確認できる -->
  <!-- selectボックスでは選択したもののvalue値が確認できる -->
  <!-- <p>Email: {{ email }}</p> -->
  <!-- <p>Password: {{ password }}</p> -->
  <!-- <p>Role: {{ role }}</p>  -->
  <!-- <p>Terms accepted: {{ terms }}</p> -->
  <!-- <p>Name: {{ names }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'frontend', // デフォルトが空がいいなら''でOK
      terms: false, //デフォルトで✓がないほうがいい場合false
      names: [], //複数選択する可能性があるので配列にしておく
      tempSkill: '',
      skills: [],
      passwordError: ''
    };
  },
  methods: {
    addSkill($event) {
      // ,が打たれるかつ空白で,を打っていない場合
      if($event.key === ',' && this.tempSkill) {
        // 重複を避けるif
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill); //tempSkillをskillsの配列に格納する
        }
        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(item => {
        // 削除したいものが引数skillに渡される。のでそれと異なる場合deleteしないのでfilterを通す
        return skill !== item;
        // deleteしたいskillがないfilterした配列が返るので結果として削除している
      });
    },
    handleSubmit() {
      // console.log('フォームが送信されました');
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ''
          : 'パスワードは6文字以上入力してください。';
        if(!this.passwordError) {
          console.log('email:', this.email);
          console.log('password:', this.password);
          console.log('role:', this.role);
          console.log('skills:', this.skills);
          console.log('確認しました', this.terms);
        }
    }
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
h4 {
  margin-bottom: 0;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
