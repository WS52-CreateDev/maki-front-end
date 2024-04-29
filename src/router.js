

import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";

import loginCustomerComponent from "./login/login-customer.component.vue";
import registerCustomerComponent from "./register/register-customer.component.vue";
import loginArtisanComponent from "./login/login-artisan.component.vue";
import registerArtisanComponent from "./register/register-artisan.component.vue";
import viewProfileCustomerComponent from "./profile/view-profile-customer.component.vue";


const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:loginComponent},
        {path:'/login-customer', component:loginCustomerComponent},
        {path:'/login-artisan', component:loginArtisanComponent},
        {path:'/register-customer', component:registerCustomerComponent},
        {path:'/register-artisan', component:registerArtisanComponent},
        {path:'/profile-customer',component:viewProfileCustomerComponent},
    ]


})

export default router;