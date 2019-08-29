<template>
    <div class='list-detail-page'>
        <div class='list-item' v-for='(item,index) in list' :key='index'>
            <div class='list-item-title border-bottom' >
                <span class='list-item-icon' v-if='item.children'></span>
                {{item.title}}
                <button class='item-show-more' @click='handleClick(item.children)'>显示全部</button>
            </div>
            <div v-if='item.children' class='list-item-children'>
                <div class='list-item-children-item border-bottom' v-for='(value,index) in item.children.list' :key='index' v-show='index==0 || index==1 || item.children.showAll'>
                    <div class='children-item-title'>
                        {{value.title}}
                        <div class='children-item-price'>
                            ￥<em class='children-item-price-num'>{{value.price}}</em>
                            <span class='children-item-price-numword'>起</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name:'DetailList',
    props:{
    list:Array,    
    },
    methods:{
        handleClick(item){
            item.showAll=!item.showAll
        }
    },
}
</script>

<style lang='stylus' scoped>
.list-detail-page
    background: #f5f5f5
    .list-item
        background:#fff;
        margin-bottom:.2rem;
        .list-item-title
            line-height:.88rem
            font-size: .32rem
            padding: 0 .2rem
            .item-show-more
                display:inline-block;
                float:right
                margin-top:.26rem
                font-size: .2rem
                background:orange;
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
.list-item-children
        line-height: .77rem
        .list-item-children-item
            .children-item-title
                line-height:.88rem
                font-size: .32rem
                padding: 0 .2rem
            .children-item-price
                display:inline
                position:absolute
                right:0.15rem;
                color: #ff9800
                font-size: .24rem
                .children-item-price-num
                    font-size:.4rem
                .children-item-price-numword
                    font-size:.2rem
                    color:#9e9e9e

</style>