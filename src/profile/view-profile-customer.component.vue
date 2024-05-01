<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
const value = 3;

</script>
<template>
  <the-toolbar/>
  <div>

   <div>
       <PvButton @click="goBackToProducts()"  class="btn btn-goback"> < </PvButton>
    </div>

   <div class="header2">
     <h1  style="font-weight: bold; font-size: 1.5rem; text-align:center; font-size: 34px;">{{ customer.name }}  {{customer.surname}}</h1>
   </div>

  </div>

  <div class="customer-profile-container">

    <div class="customer-image-container">
      <img :src="customer.photo" :alt="customer.name" />
    </div>

    <div class="customer-info-container">
      <div>
        <h2> {{ customer.email}}</h2>
        <h2> Provincia: {{customer.province}}</h2>
        <h2> Edad: {{customer.age}} años</h2>
        <h2> Sobre mi: {{customer.info}}</h2>
        <Pv-Rating v-model="value" :cancel="false" />
      </div>
    </div>

    <div class="design-buttons">
      <ul><PvButton @click="editProfile()" class="btn btn-edit">Editar Informacion</PvButton></ul>
    </div>
  </div>

  <div class="Prodcuts-card-container">

    <div class="featured-container">
      <h1>Productos </h1>
    </div>

   <div class = "card">
      <PvCard class ="product-pv-card" v-for="product in productWithArtisanName" :key="product.id">
        <template #header>
          <RouterLink :to="{ path: '/products/' + product.id }" @click="refresh(product.id)">
            <img :src="product.image" alt="Product Image" style="display: block; margin: 2rem auto 0; border-radius: 20px; width:150px; height:150px;"/>
          </RouterLink>
        </template>
        <template #content>
          <RouterLink :to="{ path: '/products/' + product.id }"><p style="font-weight: bold;">{{ product.name }}</p></RouterLink>
          <p>hecho por</p><RouterLink  @click="setArtisanId(product.artisanId)"  to="/profile-artisan-comercial" style="color: #238ACF;">{{ product.artisanName }}</RouterLink>
          <p style="font-weight: bold; text-align: right;">s/. {{ product.price }}</p>
        </template>
      </PvCard>
    </div>

  </div>

</template>

<script>
import {CustomerApiService} from "../services/customer-api.service..js";
import {ProductsApiService } from "../services/products-api.service.js";
import router from "../router.js";

export default {
  name: 'customer-profile',
  data() {
    return {
      customer: [],
      artisans: [],
      products: [],
      ProductsApiService: new ProductsApiService(),
      CustomerApiService: new CustomerApiService(),
    }
  },
  mounted() {
    this.refresh()
  },
  computed: {
    productWithArtisanName() {
      return this.products.filter(product => this.customer.products.includes(product.id))
          .map(product => {
            const artisan = this.artisans.find(artisan => artisan.id === product.artisan);
            const artisanName = artisan ? `${artisan.name} ${artisan.surname}` : '';
            const artisanId = artisan ? artisan.id : null;
            return { ...product, artisanName, artisanId };
          });
    }
  },
  methods: {

    async goBackToProducts(){
      router.push({ path: '/products'});
    },

    async setArtisanId(id){
      sessionStorage.setItem('artisanId',id);
    },

    async editProfile(){
      router.push({ path: '/update-profile'});
    },
    async refresh() {
      const userId = sessionStorage.getItem('userId')
        const responseCustomers = await this.CustomerApiService.getById(userId);
        this.customer = responseCustomers.data;
        const responseProducts = await this.ProductsApiService.getProducts();
        this.products = responseProducts.data;
        const responseArtisans = await this.ProductsApiService.getArtisans();
        this.artisans = responseArtisans.data;
    } 
  }
}



</script>

<style scoped>


.customer-profile-container {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  overflow-x: auto;
  margin-left: 250px;
}

.customer-image-container {
  width: 30rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  border-top: 4px solid #67823A;
  border-bottom: 4px solid #B7A9E0;

}

.customer-image-container img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.customer-info-container {
  display: flex;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 20px;
  align-items: center;

}

.design-buttons {
  justify-content: end;
  display: grid;
  align-items: center;
  align-content: space-around;
  align-content: space-evenly;
}

.btn {
  background-color: #67823A;
  color: white;
  border: none;

  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 4px;
}

.card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}
.product-pv-card{
  width: 20rem;
  height: 22rem;
  border-radius: 1rem;
  border-top: 4px solid #67823A;
  border-bottom: 4px solid #B7A9E0;
}

</style>
