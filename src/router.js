
import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";
import loginCustomerComponent from "./login/login-customer.component.vue";
import registerCustomerComponent from "./register/register-customer.component.vue";
import loginArtisanComponent from "./login/login-artisan.component.vue";
import registerArtisanComponent from "./register/register-artisan.component.vue";
import generalLoginComponent from "./login/general-login.component.vue";

import sucessComponent from "./success/sucess.component.vue";
import customDesignComponent from "./artisan/custom.design.component.vue";
import designRequestComponent from "./design-request/design-request.component.vue";

import ListProductsComponent from "/src/product/list-products.component.vue";


const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:generalLoginComponent},
        {path:'/login-customer', component:loginCustomerComponent},
        {path: '/design-request', component:designRequestComponent},
        {path:'/login-artisan', component:loginArtisanComponent},
        {path:'/register-customer', component:registerCustomerComponent},
        {path:'/register-artisan', component:registerArtisanComponent},
        {path:'/custom-design',component:customDesignComponent},
        {path:'/sucess', component:sucessComponent},
        {path: '/products', component: ListProductsComponent }
    ]

})

export default router;