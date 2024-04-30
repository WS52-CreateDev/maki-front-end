<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>

<template>

  <TheToolbar/>

  <div class="featured-container">
    <h1>{{ $t('featuredTitle') }}</h1>
  </div>
  <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="pi pi-shopping-cart" style="font-size: 2rem; padding-right: 1.5rem;" aria-hidden="true"></i>
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">CARRITO DE COMPRAS</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Carrito :productos="carrito" @eliminar="eliminarDelCarrito"></Carrito>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="card-container">
    <div class = "card">
      <pv-card class ="product-pv-card" v-for="product in productWithArtisanName" :key="product.id">
        <template #header>
          <RouterLink :to="{ path: '/products/' + product.id }" @click="refresh(product.id)">
            <img :src="product.image" alt="Product Image" style="display: block; margin: 2rem auto 0; border-radius: 20px; width:150px; height:150px;"/>
          </RouterLink>
        </template>
        <template #content>
          <RouterLink :to="{ path: '/products/' + product.id }"><p style="font-weight: bold;">{{ product.name }} / {{product.name_en}}</p></RouterLink>
          <p>{{ $t('madeBy') }}</p><RouterLink to="/" style="color: #238ACF;">{{ product.artisanName }}</RouterLink>
          <p style="font-weight: bold; text-align: right;">s/. {{ product.price }}</p>
          <button @click="agregarAlCarrito(product)">Agregar al carrito</button>
        </template>


      </pv-card>
    </div>
  </div>

  <div class="artisans-container">
    <h1>{{ $t('artisansTitle') }}</h1>
  </div>

  <div class="card-container">
    <div class = "card">
      <pv-card class ="artisan-pv-card" v-for="artisan in artisans" :key="artisan.id">
        <template #header>
          <RouterLink to="/"><img :src="artisan.photo" alt="Artisan Image" style="display: block; margin: 0 auto 0; border-radius: 20px; width:15rem; height:150px;"/></RouterLink>
        </template>
        <template #content>
          <RouterLink to="/"><p style="font-weight: bold; text-align: center;">{{ artisan.name + ' ' + artisan.surname}}</p></RouterLink>
        </template>
      </pv-card>
    </div>
  </div>

</template>


<script>
import {ProductsApiService} from "/src/services/products-api.service.js";
import Carrito from "/src/product/carrito.vue";
export default {
  name: 'list-products',
  components: {Carrito},
  data() {
    return {
      products: [],
      artisans: [],
      carrito: [],
      productsApiService : new ProductsApiService()
    }
  },
  mounted() {
    this.refresh();
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
    async refresh(){
      const responseProducts = await this.productsApiService.getProducts();
      this.products = responseProducts.data;

      const responseArtisans = await this.productsApiService.getArtisans();
      this.artisans = responseArtisans.data;
    },
    agregarAlCarrito(producto) {
      console.log(producto);
      this.carrito.push({ ...producto });
    },
    eliminarDelCarrito(index) {
      this.carrito.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.featured-container{
  display: flex;
  padding: 0 3rem;
}
.featured-container h1{
  font-size: 2rem;
  font-weight: bold;
}
.card-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}
.product-pv-card{
  width: 20rem;
  height: 23rem;
  border-radius: 1rem;
  border-top: 4px solid #67823A;
  border-bottom: 4px solid #B7A9E0;
}
.artisans-container{
  display: flex;
  padding: 0 3rem;
}
.artisans-container h1{
  font-size: 2rem;
  font-weight: bold;
}
.artisan-pv-card{
  width: 15rem;
  height: 15rem;
  border-radius: 20px;
  border-top: 4px solid #F0BE48;
  border-bottom: 4px solid #238ACF;
}
img {
  transition: 0.4s ease;
}
@media (hover: hover) {
  .product-pv-card img:hover {
    transform: scale(1.1);
  }
  .artisan-pv-card:hover {
    transition: 0.4s ease;
    transform: scale(1.1);
  }
}
</style>