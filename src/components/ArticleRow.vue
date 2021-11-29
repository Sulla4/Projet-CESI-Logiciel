<template>
  <div class="article--row">
    <div class="wrapper--card">
      <article-card v-for="(card, i) in three_article" :info_article="card" :key="i"/>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard";

export default {
  name: "ArticleRow",
  components: {
    ArticleCard,
  },
  props: {
    three_article: Object
  },
}

</script>

<style lang="scss" scoped>
.article--row {
  .title {
    font-size: 2rem;
  }
  .wrapper--card {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
