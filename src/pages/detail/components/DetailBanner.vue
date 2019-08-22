<template>
    <div >
        <router-link tag='div' to='/'>
            <div class='back'>
                <div class='back-bg'></div>
                <div class='iconfont icon-back'>&#xe624;</div>
            </div>
        </router-link>
        <div class='banner' @click='handleChangeGallaryShow'>
            <img class='banner-img' 
            src='//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg' 
            />
            <div class='banner-info'>
                <div class='banner-title'>故宫(AAAAA级景区)</div>
                <div class='banner-number'><span class='iconfont banner-icon'>&#xe796;</span>12</div>
            </div>
        </div>
        <Gallary :imgs='imgs' v-show='showGallary' @handleGallaryClose='closeGallary'></Gallary>
    </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary';

export default {
    name:'DetailBanner',
    data(){
        return{
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg','http://img1.qunarzz.com/sight/p0/1907/ca/ca68bd95bc36bdba3.img.jpg_350x240_0d9e7931.jpg',
            'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg','http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_350x240_8571d9ed.jpg']
        }
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
.back
    position: absolute;
    z-index:1;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    .back-bg
        display: block;
        width: .72rem;
        height: .72rem;
        background-color: #000;
        opacity: .5;
        -webkit-border-radius: .36rem;
        -moz-border-radius: .36rem;
        border-radius: .36rem;
    .icon-back
        position: absolute;
        left: -.02rem;
        top: 0;
        display: block;
        width: .72rem;
        line-height: .72rem;
        text-align: left;
        text-indent: .24rem;
        color:#fff;
        font-weight: bold;
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