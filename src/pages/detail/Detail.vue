<template>
    <div>
        <detail-banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></detail-banner>
        <detail-header></detail-header>
        <detail-list :list='list'></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import axios from 'axios'

export default {
    name:'detail',
    data(){
        return{
            list:[],
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    methods:{
        handleGetDetailInfo(){
            axios.get("/api/detail.json?id="+this.$route.params.id).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(response){
            let res = response.data
            if (res.ret && res.data){
                let data = res.data
                this.list = data.categoryList
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
            }
        }
    },
    mounted(){
        this.handleGetDetailInfo()
    }
}
</script>

<style lang='stylus' scoped>

</style>