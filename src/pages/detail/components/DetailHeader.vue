<template>
    <div>
        <router-link tag='div' to='/' class='header-detail-abs' v-show='showAbs'>
            <div class='abs-back-bg'></div>
            <div class='iconfont abs-back'>&#xe624;</div>
        </router-link>
        <div class='header-detail-fixed' v-show='!showAbs' :style='opacityStyle'>
            <p>城市选择</p>
            <router-link to='/'>
                <div class='iconfont header-detail-back'>&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            let top = document.documentElement.scrollTop
            if (top > 45 ){
                let opacity = top / 155;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = {
                    opacity,
                } 
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}

</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'

.header-detail-abs
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    .abs-back-bg
        display: block;
        width: .72rem;
        height: .72rem;
        background-color: #000;
        opacity: .5;
        -webkit-border-radius: .36rem;
        -moz-border-radius: .36rem;
        border-radius: .36rem;
    .abs-back
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
.header-detail-fixed
    z-index:2
    position:fixed
    top:0;
    right:0;
    left:0;
    height:$headerHeight;
    line-height:$headerHeight;
    text-align:center;
    background:$bgColor;
    color:#fff;
    font-size:.32rem
    .header-detail-back
        color:#fff;
        position:absolute;
        top:0;
        left:0;
        width:.64rem;
        text-align :center;
        font-size:.4rem;

</style>