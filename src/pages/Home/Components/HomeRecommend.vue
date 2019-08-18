<template>
    <div>
        <div class='recommend-title'>热销推荐</div>
        <ul>
            <li 
                class='recommend-item border-bottom' 
                v-for='item in recommendList' 
                :key='item.id'
            >
                <img :src='item.imgUrl' class='recommend-item-img'>
                <div class='recommend-item-info'>
                    <p class='recommend-item-info-title'>
                        {{item.title}}
                    </p>
                    <p class='recommend-item-info-desc'>
                        {{item.desc}}
                    </p>
                    <button class='recommend-item-info-button'><p class='info-button-text'>查看详情</p></button>
                </div> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            recommendList:[{
                id:'0001',
                imgUrl:'//img1.qunarzz.com/sight/p0/1605/99/994a4f48dd1ee9fa90.water.jpg_280x200_e05a25df.jpg',
                title:'荣国府',
                desc:'为拍摄《红楼梦》而修建的一座大型仿清古建筑群，红楼梦中景，景致如繁英。',
            },{
                id:'0002',
                imgUrl:'//img1.qunarzz.com/sight/p0/1607/c3/c3dae954f5da5a20a3.water.jpg_280x200_514c5342.jpg',
                title:'石家庄海悦天地海洋公园 ',
                desc:'360°感受鱼群从你四周游过。',
            },{
                id:'0003',
                imgUrl:'//img1.qunarzz.com/sight/p0/1408/19/15a301005c9f3d0ec71fcfd7483bb304.jpg_280x200_f5a3a06d.jpg',
                title:'沕沕水',
                desc:'山间有众多灵秀的瀑布、潭水和清泉，夏季来此漫步观景，清凉惬意。',
            },{
                id:'0004',
                imgUrl:'//img1.qunarzz.com/sight/p0/1704/5f/5fd220f7cf975deda3.img.jpg_280x200_18ffdce8.jpg',
                title:'红崖谷',
                desc:'心动之旅玻璃悬空索桥、林溪花海、汽车露营地等已陆续开放。',
            },{
                id:'0005',
                imgUrl:'//img1.qunarzz.com/sight/p0/201401/24/31ff4b10840a897d729e69068078d850.jpg_280x200_e43f345a.jpg',
                title:'正定隆兴寺（大佛寺）',
                desc:'可观赏年代久远的古建筑和众多珍贵的文物珍宝。',
            }]
        }
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
            color:#ccc
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