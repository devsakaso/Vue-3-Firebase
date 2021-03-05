<template>
  <h1>Job Details Page</h1>
  <!-- index.jsに書いたidにアクセスしたい場合$route.params.idでアクセスできる -->
  <p>The job is is {{ id }}</p>
</template>

<script>
export default {
  // index.jsでprops: trueにするとdata()ではpropsで受け取れるようになる
  props: ['id'],
  // 
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style></style>
