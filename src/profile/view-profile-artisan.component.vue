<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>
<template>
  <the-toolbar/>
  <div class="header">
    <div>
      <PvButton label="<" class="btn btn-goback"></PvButton>
    </div>
    <div class="header2">
      <h1>{{ artisan.name }}</h1>
    </div>
  </div>

  <div class="artisans-profile-container">
    <div class="artisans-image-container">
      <img :src="artisan.photo" :alt="artisan.name" />
    </div>

    <div class="artisans-info-container">
      <div>
        <h3> {{ artisan.email}}</h3>
        <h3> Provincia: {{artisan.province}}</h3>
        <h3> Edad: {{artisan.age}} años</h3>
        <h3> Sobre mi: {{artisan.info}}</h3>
        <Pv-Rating v-model="value" :cancel="false" />
      </div>
    </div>

    <div class="design-buttons">
      <ul><PvButton label="Solicitar Diseño" class="btn btn-edit"></PvButton></ul>
    </div>
  </div>

  <div class="Prodcuts-card-container">

    <div class="featured-container">
      <h1>Productos </h1>
    </div>

    <div class = "card">
      <PvCard class ="product-pv-card" v-for="product in productWithArtisanName" :key="product.id">
        <template #header>
          <RouterLink :to="{ path: '/products/' + product.id }" @click="refresh(product.id)"><img :src="product.image" alt="Product Image" style="display: block; margin: 2rem auto 0; border-radius: 20px; width:150px; height:150px;"/></RouterLink>
        </template>
        <template #content>
          <RouterLink :to="{ path: '/products/' + product.id }"><p style="font-weight: bold;">{{ product.name }}</p></RouterLink>
          <p>hecho por</p><RouterLink to="/" style="color: #238ACF;">{{ product.artisanName }}</RouterLink>
          <p style="font-weight: bold; text-align: right;">s/. {{ product.price }}</p>
        </template>
      </PvCard>
    </div>
  </div>

</template>

<script>
import {ArtisanApiService} from "../services/artisan-api.service.js";
import {ProductsApiService } from "../services/products-api.service.js";

export default {
  name: 'artisans-profile',
  data() {
    return {
      value: '',
      artisans: [],
      artisan:[],
      products: [],
      ProductsApiService: new ProductsApiService(),
      ArtisansApiService: new ArtisanApiService()
    }
  },
  mounted() {
    this.refresh()
  },
  computed: {
    productWithArtisanName() {
      return this.products.map(product => {
        const artisan = this.artisans.find(artisan => artisan.id === product.artisan);
        const artisanName = artisan ? `${artisan.name} ${artisan.surname}` : '';
        return { ...product, artisanName };
      });
    }
  },
  methods: {
    async refresh() {
      const responseProducts = await this.ProductsApiService.getProducts();
      this.products = responseProducts.data;
      const responseArtisans = await this.ProductsApiService.getArtisans();
      this.artisans = responseArtisans.data;
      const reponseArtisan = await  this.ArtisansApiService.getById(1);
      this.artisan = reponseArtisan.data;
    }
  }
}



</script>

<style scoped>

.header {
  text-align: center;
  padding: 1px 0;
  color: rgb(29, 29, 29);
  font-size: 14px;
  font-weight: bold;
  display: flex;
  margin: 20px;
}

.header2 {
  text-align: center;
  color: rgb(29, 29, 29);
  font-size: 14px;
  font-weight: bold;
  display: flex;
}

.artisans-profile-container {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  overflow-x: auto;
  margin-left: 250px;
}

.artisans-image-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 1rem;
  border-top: 4px solid #F0BE48;
  border-bottom: 4px solid #238ACF;

}

.artisans-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.artisans-info-container {
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
}

.btn {
  background-color: #6a3a82;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
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
