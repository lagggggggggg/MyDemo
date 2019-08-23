<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list='list'></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'

export default {
    name:'detail',
    data(){
        return{
            list:[{
                title:'故宫预售成人票',
                children:[{
                    title:'上午场',
                    price:'60'
                },{
                    title:'下午场',
                    price:'60'
                },{
                    title:'故宫+珍宝馆+钟表馆',
                    price:'80'
                },{
                    title:'故宫+钟表馆',
                    price:'70'
                },{
                    title:'故宫+珍宝馆',
                    price:'70'
                },]
            },{
                title:'故宫预售学生票',
                children:[{
                    title:'上午场',
                    price:'20'
                },{
                    title:'下午场',
                    price:'20'
                },{
                    title:'故宫+珍宝馆+钟表馆',
                    price:'30'
                },{
                    title:'故宫+钟表馆',
                    price:'25'
                },{
                    title:'故宫+珍宝馆',
                    price:'25'
                },]
            },{
                title:'故宫预售老年票',
                children:[{
                    title:'上午场',
                    price:'30'
                },{
                    title:'下午场',
                    price:'30'
                },{
                    title:'故宫+珍宝馆+钟表馆',
                    price:'40'
                },{
                    title:'故宫+钟表馆',
                    price:'35'
                },{
                    title:'故宫+珍宝馆',
                    price:'35'
                },]
            }]
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    }
}
</script>

<style lang='stylus' scoped>

</style>