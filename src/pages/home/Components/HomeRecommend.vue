<template>
    <div>
        <div class='recommend-title'>热销推荐</div>
        <ul>
            <router-link
                tag='li' 
                class='recommend-item border-bottom' 
                v-for='item in list' 
                :key='item.id'
                :to="'/detail/'+item.id"
            >
                <img :src='item.imgUrl' class='recommend-item-img'>
                <div class='recommend-item-info'>
                    <p class='recommend-item-info-title'>
                        {{item.address}}
                    </p>
                    <p class='recommend-item-info-desc'>
                        {{item.name}}
                    </p>
                    <button class='recommend-item-info-button'><p class='info-button-text'>查看详情</p></button>
                </div> 
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        list:Array
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixin.styl'
.recommend-title
    line-height:.8rem;
    background:#eee;
    text-indent:.2rem;
    margin-top :.2rem
.recommend-item
    display:flex;
    height:1.9rem;
    overflow:hidden;
    align-items: flex-start;
    .recommend-item-img
        height:1.7rem;
        width:2.38rem;
        padding:.1rem;
    .recommend-item-info
        flex:1
        padding:.1rem;
        min-width:0;
        .recommend-item-info-title
            line-height:.54rem;
            font-size:.32rem
            font-weight:bold;
            ellipsis()
        .recommend-item-info-desc
            line-height:.4rem;
            color:#8a8a8a
            ellipsis()
            margin:.1rem 0
        .recommend-item-info-button
            background:#ff9300;
            border-radius:.06rem;
            margin:.1rem 0;
            line-height:.44rem
            .info-button-text
                margin:.03rem
</style>