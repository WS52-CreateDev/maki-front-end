import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

// Estilos de PrimeVue y otros recursos
import 'primevue/resources/themes/lara-light-pink/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Componentes de PrimeVue
import Card from 'primevue/card';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Toolbar from 'primevue/toolbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Steps from 'primevue/steps';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';
import Rating from 'primevue/rating';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Message from 'primevue/message';
import ButtonGroup from 'primevue/buttongroup';

// Configuración de i18n
const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            Hello: 'Hello'
        }
    }
});

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(i18n)
    .component('PvCard', Card)
    .component('PvButton', Button)
    .component('PvSelectButton', SelectButton)
    .component('PvSidebar', Sidebar)
    .component('PvAvatar', Avatar)
    .component('PvMenu', Menu)
    .component('PvMenubar', Menubar)
    .component('PvToolbar', Toolbar)
    .component('PvDataTable', DataTable)
    .component('PvColumn', Column)
    .component('PvSteps', Steps)
    .component('PvInputText', InputText)
    .component('PvDivider', Divider)
    .component('PvCalendar', Calendar)
    .component('PvRating', Rating)
    .component('PvInputNumber', InputNumber)
    .component('PvInputMask', InputMask)
    .component('PvMessage', Message)
    .component('PvButtonGroup', ButtonGroup)
    .mount('#app');
