<template>
  <div class="article--card" @click="__addToCart(info_article)">
    <div class="article--information">
      <div class="top">
        <h3 class="name">
          {{ info_article.name }}
        </h3>
        <p class="price">
          {{ info_article.price }}€
        </p>
      </div>
    </div>

    <div :style="changeBackground" class="article--image"></div>
  </div>
</template>

<script>
//IMPORT
import { computed } from 'vue'

export default {
  name: "ArticleCard",
  props: {
    info_article: Object
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_article.image})`
      }
    })

    //return
    return {
      changeBackground
    }
  },
  methods: {
    __addToCart(article) {
      let myCart = [];

      if (JSON.parse(localStorage.getItem('inCart')) == null){
        myCart.push({
          id: article.id,
          name: article.name,
          price: article.price,
          image: article.image,
          quantity: 1,
        });
        localStorage.setItem('inCart', JSON.stringify(myCart));
      } else {
        myCart = JSON.parse(localStorage.getItem('inCart'));
      }

      let isInCart = myCart.findIndex(obj => obj.id === article.id);

      if (isInCart < 0){
        myCart.push({
          id: article.id,
          name: article.name,
          price: article.price,
          image: article.image,
          quantity: 1,
        });
      } else {
        myCart[isInCart].quantity += 1;
      }

      localStorage.setItem('inCart', JSON.stringify(myCart));
      window.dispatchEvent( new Event('storage') );
    }
  },
}
</script>

<style lang="scss">
.article--card {
  width: 32%;
  height: 150px;
  transition: 1s all ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #c2c2c2;
  margin: 25px;
  background-color: white;

  p {
    margin: 0px;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.5s all ease;
  }

  &:hover {
    filter: brightness(70%);
    transition: 0.5s all ease;
    border: solid 1px black;
  }
}
.article--image {
  width: 50%;
  height: 150px;
  background-size: cover;
  background-position: center;
}
.article--information {
  .top {
    font-weight: bold;
    margin: 10px 0px;
  }
  .name {
    margin: 5px;
    font-size: 1rem;
    color: black !important;
  }
  .price {
    color: #898e97;
    margin: 5px;
    font-size: 0.7rem;
  }
}
</style>
