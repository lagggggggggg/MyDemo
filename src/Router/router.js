import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home/Home.vue';
import City from '../pages/city/City'

Vue.use(VueRouter)
const routes=[
    {path:'/', component:Home },
    {path:'/city', component:City },
]

export default new VueRouter({
    mode:'history',
    routes
})