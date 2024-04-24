

import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";

import loginCustomerComponent from "./login/login-customer.component.vue";
import registerCustomerComponent from "./register/register-customer.component.vue";
import loginArtisanComponent from "./login/login-artisan.component.vue";
import registerArtisanComponent from "./register/register-artisan.component.vue";
import ListProductsComponent from "/src/product/list-products.component.vue";

const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:loginComponent},
        {path:'/login-customer', component:loginCustomerComponent},
        {path:'/login-artisan', component:loginArtisanComponent},
        {path:'/register-customer', component:registerCustomerComponent},
        {path:'/register-artisan', component:registerArtisanComponent},
        { path: '/products', component: ListProductsComponent },
    ]


})

export default router;