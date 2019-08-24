<template>
    <div class='warpped'>
        <swiper :options="swiperOption" v-if='showSwiper'>
            <swiper-slide v-for='item in list' :key='item.id'>
                <img class='swiper-img' :src='item.imgUrl'>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination:'.swiper-pagination',
                autoplay:2500,
                autoplayDisableOnInteraction: false
            },
        }
    },
    props:{
        list:Array
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }
}
</script>

<style lang='stylus' scoped>
.warpped >>> .swiper-pagination-bullet-active
    background:#fff;
.warpped
    overflow:hidden;
    width:100%;
    height:0;
    padding-bottom:29%
    .swiper-img
        width:100%;
</style>