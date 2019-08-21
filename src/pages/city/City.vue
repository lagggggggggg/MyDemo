<template>
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :hot='hotCities' :cities='cities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @change='handleChange' :target='target'></city-alphabet>
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
            letter: '',
            target:'',
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
        },
        handleChange (letter) {
            this.letter = letter
        },
        handleBgChange(target){
            this.target=target;
        }
    }
}
</script>

<style>

</style>