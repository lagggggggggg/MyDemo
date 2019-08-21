<template>
    <div>
        <div class='city-search'>
            <input class='city-search-input' placeholder="请输入城市名或拼音" v-model='keyword'/>
        </div>
        <div class='city-search-content' ref='search' v-show='keyword'>
            <ul>
                <li 
                    v-for='item in list' 
                    :key='item.id' 
                    class='search-item border-bottom'
                    @click='handleChangeCity(item.name)'   
                >
                    {{item.name}}
                </li>
                <li class='search-item border-bottom' v-show='noData'>没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
    name:'CitySearch',
    data(){
        return{
            timer:null,
            list:[],
            keyword:'',
        }
    },
    props:{
        cities:Object,
    },
    methods:{
        handleChangeCity(city){
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed:{
        noData(){
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[];
                return
            }
            this.timer = setTimeout(()=>{
                let result = [];
                for (let i in this.cities){
                    this.cities[i].forEach(element => {
                        if(element.spell.indexOf(this.keyword)>-1 || element.name.indexOf(this.keyword)>-1){
                            result.push(element)
                        }
                    });
                }
                this.list = result
            },50)
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles'
.city-search
    height:.72rem;
    padding:.1rem;
    background:$bgColor;
    .city-search-input
        height:.62rem;
        line-height:.62rem;
        text-align: center;
        width:100%;
        border-radius:.06rem;
        color:#666;
        padding:0 .15rem;
        box-sizing:border-box;
.city-search-content
    z-index:1;
    overflow:hidden;
    position:absolute;
    top:1.8rem;
    right:0;
    left:0;
    bottom:0;
    background:#eee
    .search-item
        background:#fff;
        line-height : .62rem;
        padding-left:.2rem;
        color:#666;
</style>