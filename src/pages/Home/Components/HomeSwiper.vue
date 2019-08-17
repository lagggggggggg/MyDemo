<template>
    <div class='warpped'>
        <swiper :options="swiperOption">
            <swiper-slide v-for='item in swiperList' :key='item.id'>
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
            swiperList:[
                {
                    id:'0001',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
                }, {
                    id:'0002',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1708/f1/ee65a13642c95c02.jpg_750x200_3440fec0.jpg'
                },{
                    id:'0004',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/ffb06b600df4c655d10a1dfef4a8d0e9.jpg_750x200_7b1aec5e.jpg'
                },
            ]
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
    padding-bottom:31.25%
    .swiper-img
        width:100%;
</style>