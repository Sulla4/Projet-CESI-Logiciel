<template>
  <div class="restaurant">
    <div class="restaurant--banner">
      <div class="banner" :style="{ backgroundImage: `url(${ restaurant_data.picture })`}" ></div>
      <h2>{{ restaurant_data.restaurant_name }}</h2>
    </div>
    <br>
    <cart />
    <div class="restaurant--order">
      <router-link :to="{ name: 'order'}">
        <p>FINALISER MA COMMANDE</p>
      </router-link>
    </div>
    <div class="restaurant--content">
      <h2>NOS ARTICLES</h2>
      <article-row v-for="(data, i) in data_article" :key="i" :three_article="data"/>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import DB from "../DB";
import {useRoute} from "vue-router";
import ArticleRow from "../components/ArticleRow";
import Cart from "../components/Cart";

export default {
  name: "Restaurant",
  components: {Cart, ArticleRow},
  setup() {
    class Article {
      constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
      }
    }

    let restaurant_articles = ref([]);
    let restaurant_data = ref([]);
    let data_article = ref([]);

    const getDataRestaurant = () => {
      let three_article = [];

      for (const restaurant of DB) {
        if (restaurant.restaurant_id === useRoute().params.id) {
          restaurant_data.value = restaurant;
          restaurant_articles.value = restaurant.articles;

          if (localStorage.getItem('restaurant') !== '' && localStorage.getItem('restaurant') !== restaurant.restaurant_id){
            localStorage.removeItem('inCart');
          }
          localStorage.setItem('restaurant', JSON.stringify(restaurant.restaurant_id));
        }
      }

      let all_article = [];

      for (const article of restaurant_articles.value) {
        const new_article = new Article(article.article_id, article.name, article.price, article.picture)

        // all articles array
        all_article.push(new_article);

        if (three_article.length === 2) {
          three_article.push(new_article);
          data_article.value.push(three_article);
          three_article = [];
        } else {
          three_article.push(new_article);
        }
      }
      data_article.value.push(three_article);
    }

    onMounted(getDataRestaurant);

    return {
      data_article,
      restaurant_data,
      restaurant_articles,
    }
  },
}
</script>

<style lang="scss" scoped>
  .restaurant {
    .header {
      height: 101px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        display: flex;
        height: 70px;
        width: 401px;
        background-position: center;
        background-size: cover;
        background-image: url("https://imgur.com/LGuEoO0.png");
      }
    }
    .restaurant--banner {
      position: relative;

      .banner {
        height: 250px;
        width: 100%;
        background-position: center center;
        background-size: cover;
        position: relative;
        filter: brightness(50%);
      }

      h2 {
        position: absolute;
        font-weight: bold;
        color: white;
        bottom: 0;
        margin: 20px;
      }
    }
    .restaurant--order {
      display: flex;
      justify-content: center;

      a {
        margin: auto;
        background-color: white;
        width: 10%;
        border-radius: 20px;
        font-weight: bold;
        text-align: center;

        p{
          color: #36393f;
        }
        &:hover {
          filter: brightness(80%);
        }
      }
    }
  }

</style>
