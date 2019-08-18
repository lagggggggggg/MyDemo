<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './Components/HomeHeader.vue'
import HomeSwiper from './Components/HomeSwiper.vue'
import HomeIcons from './Components/HomeIcons.vue'
import HomeRecommend from './Components/HomeRecommend.vue'
import HomeWeekend from './Components/HomeWeekend.vue'

export default {
    data(){
        return {
            msg: 'Home'
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    }
}
</script>
