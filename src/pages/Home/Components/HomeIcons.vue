<template>
    <div class='home-icon'>
        <swiper :options="swiperOption" v-if="showIcons">
            <swiper-slide v-for='(page,index) in pages' :key='index'>
                <div class='icons'>
                    <div class='icon' v-for='item in page' :key='item.id'>
                        <img class='icon-img' :src='item.imgUrl' />
                        <p class='icon-desc'>{{item.desc}}</p>
                    </div>
                </div>
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
            },
        }
    },
    props:{
        list:Array
    },
    computed:{
        pages(){
            let pages=[];
            this.list.forEach((item,index)=>{
                let page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        },
        showIcons(){
            return this.list.length
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixin.styl'
.icons
    display:flex;
    flex-wrap: wrap;
    width:7.5rem;
    align-content: flex-start;
    height:3.75rem;
    padding-top: .1rem;
    .icon
        width:1.875rem;
        height:1.775rem;
        text-align center;
        padding-top: .1rem;
        .icon-img 
            width:1.1rem;
            height: 1.1rem;
        .icon-desc
           margin-top: .1rem
           ellipsis()
.home-icon >>> .swiper-pagination-bullets
    bottom:0.1rem

</style>