<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './Components/CityHeader';
import CitySearch from './Components/CitySearch';
export default {
    data(){
        return{
            msg:'city'
        }
    },
    components:{
        CityHeader,
        CitySearch
    }
}
</script>

<style>

</style>