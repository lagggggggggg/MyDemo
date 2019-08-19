<template>
    <div class='city-header'>
        <p>城市选择</p>
        <router-link to='/'>
            <div class='iconfont icon-back'>&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'city'
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.city-header
    height:$headerHeight;
    position:relative;
    line-height:$headerHeight;
    text-align:center;
    overflow:hidden;
    background:$bgColor;
    color:#fff;
    font-size:.32rem
    .icon-back
        color:#fff;
        position:absolute;
        top:0;
        left:0;
        width:.64rem;
        text-align :center;
        font-size:.4rem;

     
</style>