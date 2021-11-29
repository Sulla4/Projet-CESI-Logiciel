<template>
  <div class="order">
    <div class="order--title">
      <div class="order--title--img"></div>
      <h1>MA COMMANDE</h1>
    </div>
    <h2>PANIER :</h2>
    <cart />
    <div class="order--next">
      <button @click="_order()"><p>FINALISER MA COMMANDE</p></button>
    </div>
    <div class="order--logged">
      <p>Votre commande en cours !</p>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart";
import axios from 'axios'

export default {
  name: "Order",
  components: {Cart},
  methods: {
    _order() {
      if (localStorage.getItem('user') === null) {
        this.$router.push('/login');
      } else {
        document.querySelector('.order--logged').style.display = "flex";
        document.querySelector('.order--next').style.display = "none";

        let user = JSON.parse(localStorage.getItem('user'));
        let token = user.token;
        let cart = JSON.parse(localStorage.getItem('inCart'));
        let total = JSON.parse(localStorage.getItem('total'));
        let restaurant = JSON.parse(localStorage.getItem('restaurant'));

        let articles = [];
        cart.forEach(article => articles.push(article.name + ' x' + article.quantity));

        let data = {
          order_Number: Date.now() + user.user.idUser + restaurant,
          user_id: user.user.idUser,
          restaurant_id: restaurant,
          orders_Details: {
            articles
          },
          order_payment: {
            prix: total
          },
          order_status: "En cours",
          orderDate: new Date().toISOString().slice(0, 10),
          order_address: user.user.addressUser,
          deliverer: "",
        };

        console.log(data)

        let config = {
          headers: {
            token: token,
          }
        };

        axios.post('http://192.168.245.1:3001/orders/',data, config);
        localStorage.removeItem('inCart');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .order{
    .order--title{
      height: 250px;
      width: 100%;
      position: relative;

      .order--title--img {
        height: 250px;
        width: 100%;
        background-image: url("https://file1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/equilibre-alimentaire/conseils-dietetiques/minceur-la-bonne-commande-au-restaurant-245231/5656771-1-fre-FR/Minceur-la-bonne-commande-au-restaurant.jpg?alias=original");
        background-position: center center;
        background-size: cover;
        filter: brightness(50%);
      }

      h1 {
        position: absolute;
        font-weight: bold;
        color: white;
        bottom: 0;
        margin: 20px;
      }
    }
    .order--next {
      display: flex;
      justify-content: center;

      button {
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
    .order--logged {
      display: none;
    }
  }
</style>
