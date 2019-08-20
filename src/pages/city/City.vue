<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hot='hotCities' :cities='cities'></city-list>
        <city-alphabet :cities='cities'></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './Components/CityHeader';
import CitySearch from './Components/CitySearch';
import CityList from './Components/CityList';
import CityAlphabet from './Components/CityAlphabet';
import axios from 'axios';

export default {
    data(){
        return{
            hotCities:[],
            cities:{},
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    mounted(){
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc(response){
            let res = response.data;
            if (res.ret && res.data){
                this.hotCities = res.data.hotCities;
                this.cities = res.data.cities;
            }
        }
    }
}
</script>

<style>

</style>