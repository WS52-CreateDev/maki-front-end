
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
            <pv-input-text class="search-bar" placeholder="Buscar " />
          </pv-icon-field>
        </div>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <RouterLink to="/">
            <i class="pi pi-shopping-cart" style="font-size: 2rem; padding-right: 1.5rem;" aria-hidden="true"></i>
          </RouterLink>
          <i class="pi pi-user" id="profile-icon" style="font-size: 2rem; padding-right: 1.5rem;" @click.prevent="toggleMenu" aria-expanded="false" aria-controls="menu" aria-haspopup="true"></i>
          <div class="menu-overlay" v-if="menuVisible" aria-labelledby="menu" aria-hidden="true" role="menu" id="menu">
            <div class="card flex justify-content-center" role="menuitem">
              <pv-menu :model="items"/>
            </div>
          </div>
          <RouterLink to="/" class="my-profile" aria-hidden="true">Mi Perfil</RouterLink>
        </div>
      </template>

    </pv-toolbar>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
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
  }
};
</script>

<style scoped>
.search-bar{
  width: 40rem;
}
.my-profile{
  font-size: 1.5rem;
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
}

</style>