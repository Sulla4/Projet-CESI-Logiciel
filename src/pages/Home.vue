<template>
  <div class="home">
    <div class="header">
      <div class="wrapper--input">
        <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez-vous envie ?">
        <div class="search">
          <div v-for="(restaurant, i) in search_restaurant" :key="i" class="container--restaurant--search">
            <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
              <div class="wrapper--img">
                <img :src="restaurant.image" alt="">
              </div>
              <h2>{{ restaurant.name }}</h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="banner"></div>
    <restaurant-row v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
//IMPORT
import DB from '../DB.js'

import {onMounted, ref, watch} from 'vue'
// COMPONENTS
import RestaurantRow from "../components/RestaurantRow";
//import axios from "axios";

export default {
  name: "Home",
  components: {
    RestaurantRow
  },
  setup() {
    class Restaurant {
      constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
      }
    }

    let data_restaurant = ref([]);
    let all_restaurant = [];

    const makeDataRestaurant = () => {
      let three_restaurant = [];

      for (const restaurant of DB) {

        const new_restaurant = new Restaurant(restaurant.restaurant_id, restaurant.restaurant_name, restaurant.picture)
        // all restaurants array
        all_restaurant.push(new_restaurant);

        if (three_restaurant.length === 2){
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
      data_restaurant.value.push(three_restaurant);
    }
    // User search restaurant
    let user_search_restaurant = ref('');
    let search_restaurant = ref([]);

    watch(user_search_restaurant, new_value => {

      let regex = RegExp(new_value, "i");
      let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name));

      new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant;
    })

    //
    onMounted(makeDataRestaurant);

    //return
    return {
      data_restaurant,
      user_search_restaurant,
      search_restaurant,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  .home {
    .header {
      height: 101px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        max-width: 250px;
      }
      .wrapper--input {
        position: relative;

        input {
          background-color: #f6f6f6;
          border: none;
          height: 60px;
          width: 400px;
          outline: none;
          padding: 0 20px;
        }
        .search {
          position: absolute;
          top: 100%;
          width: 100%;
          background-color: white;

          .container--restaurant--search {

            a {
              display: flex;
              align-items: center;
            }

            &:hover {
              background-color: #f6f6f6;
            }

            .wrapper--img {
              height: 40px;
              width: 40px;
              margin: 25px;
              overflow: hidden;
              border-radius: 50%;

              img {
                height: 100%;
                width: auto;
              }
            }
          }
        }
      }
    }
    .banner {
      height: 250px;
      width: 100%;
      background-position: center center;
      background-size: cover;
      background-image: url("https://imgur.com/uG17Yqm.png");
    }
    .logo {
      display: flex;
      height: 70px;
      width: 401px;
      background-position: center;
      background-size: cover;
      background-image: url("https://imgur.com/LGuEoO0.png");
    }
  }

</style>
