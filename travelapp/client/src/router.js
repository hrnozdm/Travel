
import { createRouter, createWebHistory } from 'vue-router';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",name:"home",component:()=>import('./screens/HomeScreen.vue')},
        {path:"/tours",name:"tours",component:()=>import('./screens/ToursScreen.vue')},
        {path:"/login_register",name:"login",component:()=>import('./screens/LoginRegisterScreen.vue')},
        {path: "/tours/:id", name:"tour-detail",component: ()=>import('./screens/TourDetail.vue')},
        {path: "/reservation", name:"reservation",component: ()=>import('./screens/ReservationScreen.vue')},
        {path: "/basket", name:"basket",component: ()=>import('./screens/BasketScreen.vue')},

    ]
})

export default router;