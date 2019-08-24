<template>
    <div>
        <div class='weekend-title'>周末去哪</div>
        <ul>
            <li 
                class='weekend-item border-bottom' 
                v-for='item in list' 
                :key='item.id'
            >
                <div class='img-warpper'>
                    <img :src='item.imgUrl' class='weekend-item-img'>
                </div>
                <div class='weekend-item-info'>
                    <p class='weekend-item-info-title'>
                        {{item.title}}
                    </p>
                    <p class='weekend-item-info-desc'>
                        {{item.desc}}
                    </p>
                </div> 
            </li>
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
.weekend-title
    line-height:.8rem;
    background:#eee;
    text-indent:.2rem;
.img-warpper
        overflow: hidden;
        height: 0;
        padding-bottom: 37.4375%;
        .weekend-item-img
            width:100%;
.weekend-item-info
        padding:.1rem;
    .weekend-item-info-title
            line-height:.54rem;
            font-size:.32rem
            font-weight:bold;
            ellipsis()
    .weekend-item-info-desc
            line-height:.4rem;
            color:#8a8a8a
            ellipsis()
            margin:.1rem 0
</style>