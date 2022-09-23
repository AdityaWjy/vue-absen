<template>
  <div v-theme:column="'narrow'" id="detail-absen" class="container">
    <h1>Json typicode</h1>
    <div v-for="(detail, index) in details" :key="index" class="data-absen">
      <h2 v-rainbow>{{ detail.title | to-uppercase }}</h2>
      <article>{{ detail.body | to-snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [],
    };
  },
  methods: {},

  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        this.details = data.body.slice(0, 10);
      });
  },
};
</script>

<style scoped>
#detail-absen {
  max-width: 800px;
  margin: 0 auto;
}

.data-absen {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

h1 {
  font-family: "Lucida Sans";
}
</style>
