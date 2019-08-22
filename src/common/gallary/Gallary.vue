<template>
    <div class='container' @click='handleChangeGallaryShow'>
        <div class='warpper'>
            <swiper :options="swiperOption">
                <swiper-slide v-for='(item,index) in imgs' :key='index'>
                    <img class='gallary-img' :src='item'>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

export default {
    name:'gallary',
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true,
            },
        }
    },
    props:{
        imgs:{
            type:Array,
            defalut(){
                return []
            }
        }
    },
    methods:{
        handleChangeGallaryShow(){
            this.$emit('handleGallaryClose')
        }
    }
}
</script>

<style lang='stylus' scoped>
.container >>> .swiper-container
    overflow:inherit;
.container
    display:flex;
    flex-direction:column;
    justify-content :center;
    z-index:99;
    background:#000;
    position:fixed;
    top:0;
    left:0;
    right:0
    bottom:0;
    .warpper
        height:5.14rem;
        width:100%
        .gallary-img
            width:100%
        .swiper-pagination 
            color:#fff;
            bottom:-3rem;
            font-size:.12rem
    
</style>