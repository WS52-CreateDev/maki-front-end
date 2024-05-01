
<template>
  <nav  aria-labelledby="toolbar-heading">
    <pv-toolbar class = "toolbar" style=" background-color: #fff;" aria-label="Main Navigation" role="navigation">

      <template #start>
        <img src="/src/assets/maki-logo-horizontal.svg" alt="Maki Logo" style="width:125px;" aria-hidden="true" />
      </template>

      <template #center>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <pv-icon-field iconPosition="left">
            <pv-input-icon class="search-icon"> <i class="pi pi-search" aria-hidden="true"></i> </pv-input-icon>
            <pv-input-text class="search-bar" placeholder="Buscar" />
          </pv-icon-field>
        </div>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <pv-button class="language-btn-en" @click.prevent="toggleLanguage('en')">
            <img src="/src/assets/images/en-flag.png" alt="EN Flag" style="width: 1.5rem; height: 1rem;" aria-hidden="true"/>
          </pv-button>
          <pv-button class="language-btn-es" @click.prevent="toggleLanguage('es')">
            <img src="/src/assets/images/es-flag.png" alt="ES Flag" style="width: 1.5rem; height: 1rem;" aria-hidden="true"/>
          </pv-button>
          <RouterLink to="/#">

          </RouterLink>

          <i class="pi pi-user" id="profile-icon" style="font-size: 2rem; padding-right: 1.5rem;" @click.prevent="toggleMenu" aria-expanded="false" aria-controls="menu" aria-haspopup="true"></i>
          <div class="menu-overlay" v-if="menuVisible" aria-labelledby="menu" aria-hidden="true" role="menu" id="menu">
            <div class="card flex justify-content-center" role="menuitem">
              <pv-menu :model="items"/>
            </div>
          </div>
          <pv-button class="my-profile" @click="goProfile()">{{ $t('myProfile') }}</pv-button>
        </div>
      </template>

    </pv-toolbar>
  </nav>
</template>

<script>
import { ref } from 'vue';
import router from "../src/router.js";


export default {
  computed: {
    carrito() {
      return carrito
    }
  },
  setup() {
    const menuVisible = ref(false);
    const items = ref([
      { label: 'Mis pedidos', icon: 'pi pi-shopping-cart', route: '/' },
      { label: 'Cerrar sesion', icon: 'pi pi-sign-out', route: '/' }
    ]);

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    return {
      menuVisible,
      items,
      toggleMenu,
    };
  },
  methods: {
    toggleLanguage(lang) {
      if (lang === 'en') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'es';
      }
    },
    goProfile(){
      const isArtisan = sessionStorage.getItem('isArtisan');

      if(isArtisan == 1){
        router.push({ path: '/profile-artisan'});
      }else{
        router.push({ path: '/profile-customer'});
      }

    }
  }
};
</script>

<style scoped>
.search-bar{
  width: 40rem;
}
.language-btn-en, .language-btn-es{
  background-color: #fff;
  border: none;
  padding: 0;
  margin: 0 15px;
  border: 2px #cccccc;
}
.my-profile{
  font-size: 1.5rem;
  background-color: white;
  color: black;
  border: 0 solid white;
}
.menu-overlay {
  position: absolute;
  margin-top: 9rem;
  margin-left: 1rem;
  z-index: 1;
}
@media (hover: hover) {
  #profile-icon:hover{
    cursor: pointer;
    transition: 0.4s;
    color: hsla(160, 100%, 37%, 1);
  }
  .my-profile:hover{
    transition: 0.4s;
    color: hsla(160, 100%, 37%, 1);
  }
}

</style>