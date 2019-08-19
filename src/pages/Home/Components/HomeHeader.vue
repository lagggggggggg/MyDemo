<template>
  <div class='header'>
      <div class='header-left'>
          <div class='iconfont icon-back'>&#xe624;</div>
      </div>
      <div class='header-input'>
          <span class='iconfont'>&#xe632;</span>
          输入城市/景点/游玩主题
      </div>
      <router-link to='/city'>
        <div class='header-right'>
            {{this.city}}
            <span class='iconfont icon-arrow'>&#xe62d;</span>  
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props:{
        city:String
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    background:$bgColor
    display:flex;
    line-height:$headerHeight;
    color:#fff;
    .header-left
        width:.64rem;
        float:left;
        .icon-back
            text-align :center;
            font-size:0.4rem
    .header-input
        flex:1;
        height .64rem
        line-height :.64rem
        padding-left:.1rem
        margin-top:.12rem
        margin-left:.12rem
        border-radius:0.1rem;
        background:#fff
        color:gray;
    .header-right
        float:right;
        width:1.24rem;
        text-align :center;
        color:#fff
        .icon-arrow
            font-size:.24rem
            margin-left:-.04rem
</style>