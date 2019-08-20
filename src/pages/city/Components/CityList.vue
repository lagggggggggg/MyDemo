<template>
    <div class='city-list' ref='wrapper'>
        <div>
            <div class='area'>
                <div class='title border-topbottom'>当前城市</div>
                <div class='button-list'>
                    <div class='button-warpper'>
                        <div class='button'>北京</div>
                    </div>
                </div>
            </div>
            <div class='area'>
                <div class='title border-topbottom'>热门城市</div>
                <div class='button-list'>
                    <div class='button-warpper'>
                        <div class='button'>北京</div>
                    </div>
                </div>
            </div>
            <div class='area'>
                <div class='title border-topbottom'>A</div> 
                <div class='item-list'>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                </div>
            </div>
            <div class='area'>
                <div class='title border-topbottom'>A</div> 
                <div class='item-list'>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                </div>
            </div>
            <div class='area'>
                <div class='title border-topbottom'>A</div> 
                <div class='item-list'>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                </div>
            </div>
            
            <div class='area'>
                <div class='title border-topbottom'>A</div> 
                <div class='item-list'>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                    <div class='item border-bottom'>阿拉尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    data(){
        return{
            msg:'citylist'
        }
    },
    mounted(){
        this.scroll= new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang='stylus' scoped>
.border-topbottom
    &:before
        border-color:#ccc;
    &:after
        border-color:#ccc;
.border-bottom
    &:before
        border-color:#ccc;
.city-list
    overflow:hidden;
    position:absolute;
    top:1.8rem;
    left:0
    right:0
    bottom:0    
    .title
        height:.64rem;
        line-height:.64rem;
        padding-left:0.2rem;
        color:#666;
        background:#eee;
        font-size:.28rem
    .button-list
        overflow:hidden;
        padding:.1rem .6rem .1rem .1rem;
        display:flex;
        flex-flow:row wrap
        .button-warpper
            width:33.33%
            .button
                margin:.1rem;
                text-align:center;
                border:solid #ccc .02rem;
                border-radius:.08rem;
                padding:.1rem 0;
    .item-list
        .item 
            line-height:.76rem;
            color:#666;
            padding-left:.2rem
</style>