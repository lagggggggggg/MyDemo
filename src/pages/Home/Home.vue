<template>
  <div>
      <home-header ></home-header>
      <home-swiper :list='bannerList'></home-swiper>
      <home-icons :list='iconList'></home-icons>
      <home-recommend :list='recommendList'></home-recommend>
      <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './Components/HomeHeader';
import HomeSwiper from './Components/HomeSwiper';
import HomeIcons from './Components/HomeIcons';
import HomeRecommend from './Components/HomeRecommend';
import HomeWeekend from './Components/HomeWeekend';
import axios from 'axios';
import {mapState} from 'vuex';

export default {
    data(){
        return {
            bannerList : [],
            iconList : [],
            recommendList : [],
            weekendList : [],
            lastCity:'',
        }
    },
    computed:{
        ...mapState(['city'])
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(response){
            let res = response.data;
            if(res.ret && res.data){
                let data = res.data;
                this.bannerList = data.bannerList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList
            }
        }
    },
     mounted(){
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>
