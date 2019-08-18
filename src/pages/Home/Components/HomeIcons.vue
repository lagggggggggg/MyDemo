<template>
    <div class='home-icon'>
        <swiper :options="swiperOption">
            <swiper-slide v-for='(page,index) in pages' :key='index'>
                <div class='icons'>
                    <div class='icon' v-for='item in page' :key='item.id'>
                        <img class='icon-img' :src='item.imgUrl' />
                        <p class='icon-context'>{{item.context}}</p>
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
            iconList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                context:'景点门票'
            },{
                id:'0002',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                context:'自然风光'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                context:'夏日玩水'
            },{
                id:'0004',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
                context:'北京世园会'
            },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                context:'植物园'
            },{
                id:'0006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                context:'荣国府'
            },{
                id:'0007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                context:'动物园'
            },{
                id:'0008',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/548cd61b9754b28f1d2d55fdd637ca51.png',
                context:'黄金寨'
            },{
                id:'0009',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
                context:'北京欢乐谷'
            },{
                id:'0010',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                context:'邯郸方特'
            }],
        }
    },
    computed:{
        pages(){
            let pages=[];
            this.iconList.forEach((item,index)=>{
                let page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
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
        .icon-context
           margin-top: .1rem
           ellipsis()
.home-icon >>> .swiper-pagination-bullets
    bottom:0.1rem

</style>