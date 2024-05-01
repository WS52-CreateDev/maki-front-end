import {createI18n} from "vue-i18n";

import en from "/src/locales/en.js";
import es from "/src/locales/es.js";

const i18n = createI18n({
    locale:'es',
    messages:{
        en ,
        es
    }
})

export  default  i18n;