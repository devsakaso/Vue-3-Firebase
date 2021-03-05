<template>
  <div v-if="job">
    <!-- v-ifでjobがnullならfalse,dataがあるならtrueで表示を条件分岐 -->
    <h1>{{ job.title }}</h1>
    <!-- index.jsに書いたidにアクセスしたい場合$route.params.idでアクセスできる -->
    <p>The job is is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>ローディング中・・・</p>
  </div>
</template>

<script>
export default {
  // index.jsでprops: trueにするとdata()ではpropsで受け取れるようになる
  props: ['id'],
  // fetchしたデータがきた後で上の情報を表示しないとnullなのでエラーになる
  data() {
    return {
      job: null
    }
  },
  // jsonデータを受け取る
  // idはthis.id
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => (this.job = data)) // = jobsでなくjob
      .catch(err => console.log(err.message))
  }
}
</script>

<style></style>
