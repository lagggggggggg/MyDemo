<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './Components/HomeHeader.vue'
import HomeSwiper from './Components/HomeSwiper.vue'
import HomeIcons from './Components/HomeIcons.vue'

export default {
    data(){
        return {
            msg: 'Home'
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>
