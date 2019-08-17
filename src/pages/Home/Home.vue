<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './Components/HomeHeader.vue'
import HomeSwiper from './Components/HomeSwiper.vue'

export default {
    data(){
        return {
            msg: 'Home'
        }
    },
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>
