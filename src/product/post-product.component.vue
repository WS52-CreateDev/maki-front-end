<script setup>
import { ref } from 'vue';
import TheToolbar from "/public/the-toolbar.component.vue";

const value = ref(null);
const categories = ref([
  { name: 'Ropa', id: 1},
  { name: 'Joyas', id: 2},
  { name: 'Accesorios', id: 3},
  { name: 'Decoración', id: 4},
  { name: 'Juguetes', id: 5},
  { name: 'Otros', id: 6}
]);
</script>

<template>

  <TheToolbar/>
  <div class = "button-container">
    <RouterLink to="/products"><pv-button class="btn-back" icon="pi pi-arrow-left" rounded aria-label="Filter" /></RouterLink>
    <RouterLink to="/products"><p style="font-weight: bold; font-size: 1.5rem;">{{ $t('return') }}</p></RouterLink>
  </div>

  <div class="product-card">
    <div class="product-title">
      <h1>{{ $t('product') }}</h1>
    </div>

    <div class="product-form">

      <div class ="product-image">
        <img src="/src/assets/images/placeholder-image.jpg" alt="Upload Image" style="display: block; width:15rem; height:15rem;"/>
        <label for="name">{{ $t('urlImage') }}</label> <br>
        <pv-input-text id="image" v-model="image" aria-describedby="image-help" />
      </div>


      <div class="product-info">
        <div class="product-name">
          <label for="name">{{ $t('productName') }}</label> <br>
          <pv-input-text id="name" v-model="name" aria-describedby="name-help" />
        </div>

        <div class="product-width">
          <label for="width">{{ $t('width') }}</label> <br>
          <pv-input-text id="width" v-model="width" aria-describedby="width-help" />
        </div>

        <div class="product-height">
          <label for="height">{{ $t('height') }}</label> <br>
          <pv-input-text id="height" v-model="height" aria-describedby="height-help" />
        </div>

        <div class="product-depth">
          <label for="depth">{{ $t('depth') }}</label> <br>
          <pv-input-text id="depth" v-model="depth" aria-describedby="depth-help" />
        </div>

        <div class="product-material">
          <label for="material">{{ $t('materials') }}</label> <br>
          <pv-input-text id="material" v-model="material" aria-describedby="material-help" />
        </div>

        <div class="product-price">
          <label for="price">{{ $t('price') }}</label> <br>
          <pv-input-text id="price" v-model="price" aria-describedby="price-help" />
        </div>

        <div class="product-description">
          <label for="description">{{ $t('descriptionProduct') }}</label> <br>
          <pv-textarea id="description" v-model="description"  autoResize rows="5" cols="30" />
        </div>

        <div class="product-category">
          <label for="category">{{ $t('category') }}</label> <br>
          <pv-dropdown id ="category" v-model="category" :options="categories" optionLabel="name" placeholder="Selecciona una categoría"
                       @click="handleCategoryChange"/>
        </div>

      </div>

    </div>

    <div class="post-button-container">
      <pv-button class = "post-btn" @click="create()">{{ $t('uploadProduct') }} </pv-button>
    </div>
  </div>

</template>

<script>
import {ProductsApiService} from "/src/services/products-api.service.js";

export default {
  name: 'post-product',
  data() {
    return {
      name : '',
      description: '',
      price: '',
      width: '',
      height: '',
      depth: '',
      material: '',
      artisan: '',
      category: '',
      image: '',
      productsApiService : new ProductsApiService()
    }
  },
  methods: {
    async create(){
      const body = {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
        width: this.width,
        height: this.height,
        depth: this.depth,
        material: this.material,
        artisanId: sessionStorage.getItem('userId'),
        category: this.category.id,

      }

      const response = await this.productsApiService.createProduct(body)

      if(response.status === 201){
        alert('Product created');
        this.refresh();
        router.push('products');
      } else {
        alert('Error creating product');
      }
    },
    handleCategoryChange(newValue) {
      this.category = newValue;
    },
    async refresh() {
      this.name = '';
      this.description = '';
      this.price = '';
      this.width = '';
      this.height = '';
      this.depth = '';
      this.material = '';
      this.category = '';
      this.image = '';
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
  border-radius:1.5rem;
}
.product-title{
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.product-form{
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-image{
  margin-right: 10rem;
  padding: 3.5rem;
  border-radius: 2rem;
  border: 5px solid #BF9BDE;
}
.product-info{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
}
.product-info #name, #width, #height, #depth, #material, #price, #description, #category{
  border-radius: 20px;
  width: 20rem;
}
.product-info label{
  font-weight: bold;
}
.post-button-container{
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
.post-btn{
  background-color:#67823A;
  width: 15rem;
  border-color:#67823A;
  justify-content: center;
  border-radius:1.5rem;
}
@media (hover: hover){
  .btn-back:hover{
    transition: 0.4s ease;
    transform: scale(1.1);
  }
  .post-btn:hover {
    transition: 0.4s ease;
    transform: scale(1.1);
  }
}
</style>