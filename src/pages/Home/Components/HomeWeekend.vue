<template>
    <div>
        <div class='weekend-title'>周末去哪</div>
        <ul>
            <li 
                class='weekend-item border-bottom' 
                v-for='item in weekendList' 
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
            weekendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                title:'京城周末撒欢',
                desc:'在帝都过周末，不仅仅是城中游！',
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
                title:'京城溜娃必去',
                desc:'德智体美劳全面发展的亲子日，这些地方该去看看…',
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                title:'帝都必打卡',
                desc:'来北京必去的景点非这些地方莫属',
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
                title:'漂流勇进，烧烤露营',
                desc:'轻松水上漂，任我乐逍遥',
            },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
                title:'北京清凉避暑胜地',
                desc:'到大自然中享受“天然空调”的清凉',
            }]
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixin.styl'
.weekend-title
    line-height:.8rem;
    background:#eee;
    text-indent:.2rem;
    margin-top :.2rem
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
            color:#ccc
            ellipsis()
            margin:.1rem 0
</style>