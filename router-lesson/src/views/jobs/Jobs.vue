<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <!-- router-linkを設定することで、それぞれのtitleのidのurlとjobDetailsのページがひもづく 
     name: 'jobDetails'でJobDetails.vueとリンク -->
      <!-- params: { id: job.id }でindex.jsのpathの:idとv-forでループしているjobのidとリンク -->
      <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>ローディング中・・・</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => (this.jobs = data)) // = dataのdataは上のdata()のこと
      .catch(err => console.log(err.message))
  }
}
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background-color: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
