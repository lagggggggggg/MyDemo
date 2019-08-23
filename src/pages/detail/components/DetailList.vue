<template>
    <div>
        <div class='list-item' v-for='(item,index) in list' :key='index'>
            <div class='list-item-title border-bottom'>
                <span class='list-item-icon' v-if='item.children'></span>
                {{item.title}}
                <div class='list-item-price' v-if='item.price'>
                    ￥<em class='list-item-price-num'>{{item.price}}</em>
                    <span class='list-item-price-numword'>起</span>
                </div>
            </div>
            <div v-if='item.children' class='list-item-children'>
                    <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name:'DetailList',
    props:{
    list:Array,    
    }
}
</script>

<style lang='stylus' scoped>
.list-item-title
    line-height:.88rem
    font-size: .32rem
    padding: 0 .2rem
    .list-item-icon
        display: inline-block
        position: relative
        width: .36rem
        height: .36rem
        top: .07rem
        left: .07rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .list-item-price
        display:inline
        position:absolute
        right:-.02rem;
        color: #ff9800
        font-size: .24rem
        .list-item-price-num
            font-size:.4rem
        .list-item-price-numword
            font-size:.2rem
            color:#9e9e9e
.list-item-children
        padding: 0 .4rem
        line-height: .77rem

</style>