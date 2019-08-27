import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home/Home.vue';
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'

Vue.use(VueRouter)
const routes=[
    {path:'/', component:Home },
    {path:'/city', component:City },
    {path:'/detail/:id', component:Detail },
]

export default new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})