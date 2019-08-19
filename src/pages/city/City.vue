<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from './Components/CityHeader';
import CitySearch from './Components/CitySearch';
import CityList from './Components/CityList';
export default {
    data(){
        return{
            msg:'city'
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList
    }
}
</script>

<style>

</style>