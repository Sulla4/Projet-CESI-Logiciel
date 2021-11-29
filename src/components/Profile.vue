<template>
  <div class="profile">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.user.firstnameUser}} "{{currentUser.user.nameUser}}" {{currentUser.user.lastnameUser}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Email:</strong>
      {{currentUser.user.email}}
    </p>
    <p>
    <strong>Rôle:</strong>
    {{ currentUser.user.role_idRole }}
    </p>

    <div class="profile--buttons">
      <div v-if="currentUser.user.role_idRole === 'Utilisateur'">
        <router-link :to="{ name: 'order'}">
          <button>
            <i class="fas fa-shopping-cart"></i>
            Mon Panier
          </button>
        </router-link>
      </div>
      <button @click="_logOut()">Log Out</button>
    </div>

    <div class="profile--orders">
      <h3>MES COMMANDES :</h3>
      <div class="profile--orders--item" v-for="item in orders" :key="item">
        <div v-if="currentUser.user.role_idRole === 'Restaurateur'">
          <button @click="_deleteOrder(item.order_Number)">Supprimer la commande</button>
        </div>

        <p>Date : {{ item.orderDate }}</p>
        <div v-if="currentUser.user.role_idRole === 'Restaurateur'">
          <select name="orderStatus">
            <option value="">{{ item.order_status }}</option>
            <option @click="_notifyMe(item.user_id,'En cours'), _updateOrderStatus(item.order_Number,'En cours')" value="En cours">En cours</option>
            <option @click="_notifyMe(item.user_id,'Prête'), _updateOrderStatus(item.order_Number,'Prête')" value="Prête">Prête</option>
            <option @click="_notifyMe(item.user_id,'Prise en charge par le livreur'), _updateOrderStatus(item.order_Number,'Prise en charge par le livreur')" value="Prise en charge par le livreur">Prise en charge par le livreur</option>
          </select>
        </div>
        <div v-if="currentUser.user.role_idRole === 'Livreur'">
          <select name="orderStatus">
            <option value="">{{ item.order_status }}</option>
            <option @click="_notifyMe(item.user_id,'En cours de livraison'), _updateOrderStatus(item.order_Number,'En cours de livraison')" value="En cours de livraison">En cours de livraison</option>
            <option @click="_notifyMe(item.user_id,'Livrée'), _updateOrderStatus(item.order_Number,'Livrée')" value="Livrée">Livrée</option>
          </select>
        </div>
        <p>Status : {{ item.order_status }}</p>
        <div v-if="currentUser.user.role_idRole === 'Livreur'">
          <p>Adresse de livraison : {{ item.order_address }}</p>
          <br>

          <iframe
              width="300"
              height="300"
              style="border:0"
              loading="lazy"
              allowfullscreen
              :src="_getMapUrl(item.order_address)">
          </iframe>
          <br>

        </div>
        <p>Numéro de commande : {{ item.order_Number }}</p>
        <p>Restaurant : {{ item.restaurant_id }}</p>
        <p>Articles : {{ item.orders_Details.articles }}</p>
        <p>Prix : {{ item.order_payment.prix }}€</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data () {
    return {
      orders: [],
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let token = user.token;
    let id = this.currentUser.user.idUser;
    let role = this.currentUser.user.role_idRole;
    let isRes = role === "Restaurateur" ? "/res/" : "/";

    let myId = '';
    if (role !== 'Livreur') {
      myId = id;
    }

    let config = {
      headers: {
        token: token,
      }
    };

    axios
        .get('http://192.168.245.1:80/orders' + isRes + myId, config)
        .then(response => this.orders = response.data.order);
  },
  methods: {
    _logOut () {
      localStorage.removeItem('user');
      this.$router.push('./');
    },
    _updateOrderStatus(orderNumber, orderStatus) {
      let user = JSON.parse(localStorage.getItem('user'));
      let token = user.token;
      let config = {
        headers: {
          token: token,
        }
      };
      let body = {
        order_status: orderStatus
      };
      axios.put('http://192.168.245.1:80/orders/'+ orderNumber + '/', body, config);
    },
    _deleteOrder(orderNumber) {
      let user = JSON.parse(localStorage.getItem('user'));
      let token = user.token;
      let config = {
        headers: {
          token: token,
        }
      };
      axios.delete('http://192.168.245.1:80/orders/'+ orderNumber + '/', config);
    },
    _notifyMe(userId, message) {
      // Vérifions si le navigateur prend en charge les notifications
      if (!('Notification' in window)) {
        alert('Ce navigateur ne prend pas en charge la notification de bureau')
      }

      // Vérifions si les autorisations de notification ont déjà été accordées
      else if (Notification.permission === 'granted') {
        // Si tout va bien, créons une notification
        new Notification(userId + ', Votre commande est ' + message)
      }

      // Sinon, nous devons demander la permission à l'utilisateur
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          // Si l'utilisateur accepte, créons une notification
          if (permission === 'granted') {
            new Notification(userId + ', Votre commande est ' + message)
          }
        })
      }

      // Enfin, si l'utilisateur a refusé les notifications, et que vous
      // voulez être respectueux, il n'est plus nécessaire de les déranger.
    },
    _getMapUrl(address) {
      return 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBQjpFIEo_kwUv7ojZIKN8QKnqZupAIIxw&q=' + encodeURIComponent( address );
    },
  }
};
</script>

<style lang="scss">
  .profile {
    border: solid 1px #f6f6f6;
    border-radius: 15px;
    padding: 20px;

    .profile--orders--item {
      border: solid 1px #f6f6f6;
      border-radius: 15px;
      padding: 20px;
      margin: 20px 0;
    }

    .profile--buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        width: 150px;
        height: 50px;
        color: black;
      }
    }
  }
</style>
