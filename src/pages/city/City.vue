<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './Components/CityHeader';
import CitySearch from './Components/CitySearch';
import CityList from './Components/CityList';
import CityAlphabet from './Components/CityAlphabet';

export default {
    data(){
        return{
            msg:'city'
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    }
}
</script>

<style>

</style>