<template>
    <div >
        <div class='banner' @click='handleChangeGallaryShow'>
            <img class='banner-img' 
            :src='bannerImg' 
            />
            <div class='banner-info'>
                <div class='banner-title'>{{this.sightName}}</div>
                <div class='banner-number'><span class='iconfont banner-icon'>&#xe796;</span>{{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <Gallary :imgs='gallaryImgs' v-show='showGallary' @handleGallaryClose='closeGallary'></Gallary>
    </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary';

export default {
    name:'DetailBanner',
    data(){
        return{
            showGallary:false,
        }
    },
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array,
    },
    components:{
        Gallary,
    },
    methods:{
        handleChangeGallaryShow(){
            this.showGallary = true;
        },
        closeGallary(){
            this.showGallary = false;
        }
    }
}
</script>

<style lang='stylus' scoped>
.banner
    position:relative
    overflow:hidden;
    height:0;
    padding-bottom:55%;
    .banner-img
        width:100%
    .banner-info
        display:flex;
        position:absolute;
        left:0;
        right:0
        bottom:0;
        line-height:.6rem;
        color:#fff;
        background-image:linear-gradient(to bottom, rgba(0,0,0, 0), rgba(0,0,0, .8))
        .banner-title
            flex:1;
            font-size: .32rem;
            padding: 0 .2rem;
        .banner-number
            line-height:.32rem;
            height:.32rem;
            padding:0 .4rem;
            margin-top:.14rem
            margin-right:.1rem
            border-radius:.32rem
            background:rgba(0,0,0, .45)
            font-size:.26rem;
            .banner-icon
                font-size:.26rem

</style>