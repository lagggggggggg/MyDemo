<template>
    <ul class='alphabet-list'>
        <li 
            class='alphabet-list-item' 
            v-for='item in letters' 
            :key='item'
            :ref='item'
            @click='handleClick'
            @touchstart='handleTouchStart'
            @touchmove='handleTouchMove'
            @touchend='handleTouchEnd'
        >
            {{item}}

        </li>
    </ul>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            touchStatus:false,
            timer:null,
            startY:0,
        }
    },
    props:{
        cities:Object,
    },
    computed:{
        letters(){
            let letters = [];
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true;
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer= setTimeout(()=>{
                    let touchY = e.touches[0].clientY - 89;
                    let index =Math.floor((touchY-this.startY)/20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd(){
            this.touchStatus = false;
        },
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop;
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.alphabet-list
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:absolute;
    top:1.58rem;
    right:0;
    bottom:0;
    width:.4rem;
    .alphabet-list-item
        text-align:center;
        line-height:.4rem;
        color:$bgColor
        
</style>