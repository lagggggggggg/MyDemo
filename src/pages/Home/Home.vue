<template>
  <div>
      <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './Components/HomeHeader.vue'

export default {
    data(){
        return {
            msg: 'Home'
        }
    },
    components:{
        HomeHeader
    }
}
</script>
