<template>
  <div class="cart">
    <div class="cart--content">
      <div v-for="(article, i) in cart" :key="i" class="item">
        <div v-bind:style="{ backgroundImage: 'url(' + article.image + ')' }" class="article--image"></div>
        <div class="article--info">
          <h4>{{ article.name }}</h4>
          <p>Prix Unitaire : <b>{{ article.price }}</b>€</p>
          <p>Quantité : <b>{{ article.quantity }}</b></p>
          <p>Total : <b>{{ (article.price * article.quantity).toFixed(2) }}</b>€</p>
        </div>
        <div class="article--button">
          <button @click="__addOne(article)"><i class="fas fa-plus"></i></button>
          <button @click="__removeOne(article)"><i class="fas fa-minus"></i></button>
        </div>
      </div>
    </div>
    <div class="cart--total">
      <p>Prix total : <b>{{ total.toFixed(2) }}</b>€</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Cart",
  data() {

    let cart = JSON.parse(localStorage.getItem('inCart'));
    let total = 0;

    if (cart !== null){
      cart.forEach(article => total += article.price * article.quantity);
    }
    localStorage.setItem('total', JSON.stringify(total));
    return {
      cart,
      total,
    }
  },
  methods: {
    __addOne(article) {
      let myCart = JSON.parse(localStorage.getItem('inCart'));

      let isInCart = myCart.findIndex(obj => obj.id === article.id);

      myCart[isInCart].quantity += 1;
      this.cart[isInCart].quantity += 1;

      this.total = 0;
      myCart.forEach(article => this.total += article.price * article.quantity);

      localStorage.setItem('inCart', JSON.stringify(myCart));
      localStorage.setItem('total', JSON.stringify(this.total));
    },
    __removeOne(article) {
      let myCart = JSON.parse(localStorage.getItem('inCart'));

      let isInCart = myCart.findIndex(obj => obj.id === article.id);

      myCart[isInCart].quantity -= 1;
      this.cart[isInCart].quantity -= 1;

      if (myCart[isInCart].quantity <= 0) {
        myCart.splice(isInCart, 1);
        this.cart.splice(isInCart, 1);
      }

      if (myCart !== ''){
        this.total = 0;
        myCart.forEach(article => this.total += article.price * article.quantity);
      }

      localStorage.setItem('inCart', JSON.stringify(myCart));
      localStorage.setItem('total', JSON.stringify(this.total));
    },
  },
  created() {
    window.addEventListener('storage', () => {
      let cart = JSON.parse(localStorage.getItem('inCart'));
      let total = 0;

      if (cart !== ''){
        cart.forEach(article => total += article.price * article.quantity);
      }

      this.cart = cart;
      this.total = total;

      localStorage.setItem('total', JSON.stringify(this.total));
    })
  },
}
</script>

<style lang="scss" scoped>
.cart {
  .cart--content {
    display: flex;
    justify-content: space-around;
    overflow: auto;
    border: solid 1px #7e8083;
    border-radius: 10px;
    padding: 20px 20px 30px;

    .item {
      width: 200px;
      height: 295px;
      border: solid 1px #7e8083;
      margin: 10px;
    }
    .article--image {
      display: flex;
      width: 200px;
      height: 100px;
      background-size: cover;
      background-position: center;
    }
    .article--info {
      padding: 10px;
      margin-bottom: 10px;

      p {
        margin: 0;
      }
      h4 {
        height: 40px;
        text-align: center;
        margin: 20px;
      }
    }
    .article--button {
      display: flex;
      justify-content: space-around;

      button {
        width: 50px;
        height: 50px;
      }
    }
  }

}
</style>
