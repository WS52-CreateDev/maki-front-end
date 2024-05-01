<script setup>
import {ref} from 'vue';
import TheToolbar from "/public/the-toolbar.component.vue";

const value = ref(4);
</script>

<template>
  <TheToolbar/>
  <div class="button-container">
    <RouterLink to="/products"><pv-button class="btn-back" icon="pi pi-arrow-left" rounded aria-label="Filter" /></RouterLink>
    <RouterLink to="/products"><p style="font-weight: bold; font-size: 1.5rem;">Ver Todos</p></RouterLink>
  </div>

  <div class = "card-container">
    <div class = "card">
      <pv-card class ="product-pv-card" :key="product.id">
        <template #header>
          <img :src="product.image" alt="Product Image" style="display: block; border-radius: 20px; width:25rem; height:25.4rem;"/>
        </template>
      </pv-card>
      <div class="rating">
        <pv-rating v-model="value" readonly :cancel="false"/>
      </div>
    </div>

    <div class ="product-info">
      <p style="font-weight: bold; font-size: 2.3rem;">{{ product.name }} / </p>
      <p style="font-weight: bold; font-size: 2rem;">{{ product.name_en }}</p>
      <p style="display: inline;">{{$t('madeBy')}}:  </p><RouterLink @click="setArtisanId(productWithArtisanName.artisanId)" to="/profile-artisan-comercial" style="color: #238ACF;">{{ productWithArtisanName.artisanName }}</RouterLink>
      <br><br>
      <p>{{$t('handcrafted')}}</p>
      <p style="font-weight: bold; display: inline;">{{$t('materials')}}: </p>
      <p style="display: inline;"> {{ product.material }}</p>
      <br>
      <p style="font-weight: bold; display: inline;">{{$t('width')}}: </p>
      <p style="display: inline;"> {{product.width}}</p>
      <br>
      <p style="font-weight: bold; display: inline;">{{$t('height')}}: </p>
      <p style="display: inline;"> {{product.height}}</p>
      <br>
      <p style="font-weight: bold; display: inline;">{{$t('depth')}}: </p>
      <p style="display: inline;"> {{product.depth}}</p>
      <br><br>
      <p>{{product.description}}</p> <br>
      <p>{{product.description_en}}</p>
    </div>
    <div class ="shipping-info">
      <p style="font-weight: bold;">{{$t('shippingInfo')}}</p>
      <p>{{$t('freeShipping')}}</p>
      <p>{{$t('shippingTime')}}</p>
      <p>{{$t('freeReturns')}}</p>

      <div class ="price">
        <p style="font-weight: bold; display: inline;">{{$t('price')}}: </p>
        <p style="font-weight: bold; display: inline; font-size: 2rem; color: #67823A">s/. {{ product.price }}</p>
      </div>

      <div class ="shopping-buttons">
        <pv-button class = "add-to-cart">{{$t('addToCart')}}</pv-button>
        <br>
        <pv-button class = "buy-now">{{$t('buyNow')}}</pv-button>
      </div>
    </div>

  </div>

</template>

<script >
import {ProductsApiService} from "/src/services/products-api.service.js";

export default {
  name: 'the-about-product',
  data() {
    return {
      id: 0,
      product: [],
      artisans: [],
      productsApiService: new ProductsApiService()
    }
  },
  async mounted() {
    this.id = this.$route.params.id;
    await this.getProduct();
    await this.refresh();
  },
  computed: {
    productWithArtisanName() {
      const artisan = this.artisans.find(artisan => artisan.id === this.product.artisan);
      const artisanName = artisan ? `${artisan.name} ${artisan.surname}` : '';
      const artisanId = artisan ? artisan.id : null;
      return { ...this.product, artisanName, artisanId };
    }
  },
  methods: {
    async setArtisanId(id){
      sessionStorage.setItem("artisanId",id);
    },
    async getProduct() {
      const response = await this.productsApiService.getProductById(this.id);
      this.product = response.data;
    },
    async refresh() {
      const responseArtisans = await this.productsApiService.getArtisans();
      this.artisans = responseArtisans.data;
    }
  }
}
</script>

<style scoped>
.button-container{
  margin-left:5rem;
  display: flex;
}
.btn-back{
  background-color: #67823A;
  border-color: #67823A;
  margin-right: 1rem;
}
.card-container{
  display: flex;
  align-items: center;
  margin-left: 5rem;
  margin-bottom: 5rem;
}
.product-pv-card{
  height: 26rem;
  width: 25rem;
  border-radius: 2rem;
  border-top: 5px solid #B7A9E0;
  border-bottom: 5px solid #67823A;
}
.rating{
  margin-top: 3rem;
  margin-left: 8rem;
}
.product-info{
  margin-left: 4rem;
  margin-right: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-right: 3px solid #D9D9D9;
}
.shipping-info{
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.price{
  margin: 2rem 0;
}
.shopping-buttons{
  margin: 4rem 10rem;
  transition: 0.4s ease;
}
.add-to-cart{
  background-color:#B7A9E0;
  width: 15rem;
  border-color:#B7A9E0;
  justify-content: center;
  border-radius:1.5rem;
  margin-bottom: 1rem;
}
.buy-now{
  background-color:#67823A;
  width: 15rem;
  border-color:#67823A;
  justify-content: center;
  border-radius:1.5rem;
}
@media (hover: hover){
  .add-to-cart:hover {
    transition: 0.4s ease;
    transform: scale(1.1);
  }
  .buy-now:hover {
    transition: 0.4s ease;
    transform: scale(1.1);
  }
  .btn-back:hover{
    transition: 0.4s ease;
    transform: scale(1.1);
  }
}

</style>