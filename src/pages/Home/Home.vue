<template>
  <div>
      <home-header :city='city'></home-header>
      <home-swiper :list='bannerList'></home-swiper>
      <home-icons :list='iconList'></home-icons>
      <home-recommend :list='recommendList'></home-recommend>
      <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './Components/HomeHeader'
import HomeSwiper from './Components/HomeSwiper'
import HomeIcons from './Components/HomeIcons'
import HomeRecommend from './Components/HomeRecommend'
import HomeWeekend from './Components/HomeWeekend'
import axios from 'axios'

export default {
    data(){
        return {
            city : '',
            bannerList : [],
            iconList : [],
            recommendList : [],
            weekendList : [],
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    mounted(){
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(response){
            console.log(response)
            let res = response.data;
            if(res.ret && res.data){
                let data = res.data;
                this.city = data.city;
                this.bannerList = data.bannerList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList
            }
        }
    }
}
</script>
