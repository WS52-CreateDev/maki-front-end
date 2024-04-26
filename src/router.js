

import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";
import customDesignComponent from "./artisan/custom.design.component.vue";
import loginCustomerComponent from "./login/login-customer.component.vue";
import registerCustomerComponent from "./register/register-customer.component.vue";
import loginArtisanComponent from "./login/login-artisan.component.vue";
import registerArtisanComponent from "./register/register-artisan.component.vue";
import sucessComponent from "./success/sucess.component.vue";
;

const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:loginComponent},
        {path:'/login-customer', component:loginCustomerComponent},
        {path:'/login-artisan', component:loginArtisanComponent},
        {path:'/register-customer', component:registerCustomerComponent},
        {path:'/register-artisan', component:registerArtisanComponent},
        {path:'/custom-design',component:customDesignComponent},
        {path:'/sucess', component:sucessComponent}
    ]

})

export default router;