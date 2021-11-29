<template>
 <div class="restaurant--card">
   <router-link :to="{ name: 'restaurant', params: { id: info_restaurant.id } }">
     <div :style="changeBackground" class="restaurant--image"></div>
     <div class="restaurant--information">
       <div class="top">
         <p class="name">
           {{ info_restaurant.name }}
         </p>
       </div>
     </div>
   </router-link>
 </div>
</template>

<script>
//IMPORT
import { computed } from 'vue'

export default {
  name: "RestaurantCard",
  props: {
    info_restaurant: Object
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_restaurant.image})`
      }
    })

    //return
    return {
      changeBackground
    }
  }
}
</script>

<style lang="scss">
.restaurant--card {
  width: 32%;
  height: 30vh;
  transition: 0.5s all ease;

  p {
    margin: 0px;
  }

  &:hover {
    transform: scale(0.9);
    transition: 0.5s all ease;
  }
}
.restaurant--image {
  height: 70%;
  background-size: cover;
  background-position: center;
}
.restaurant--information {
  .top {
    font-weight: bold;
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
