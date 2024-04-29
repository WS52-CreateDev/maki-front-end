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
      <h1>{{ customer.name }}</h1>
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
      <ul><PvButton label="Editar Informacion" class="btn btn-edit"></PvButton></ul>
    </div>
  </div>

  





</template>

<script>
import {CustomerApiService} from "../services/customer-api.service..js";

export default {
  name: 'customer-profile',
  data() {
    return {
      value: '',
      customer: [],
      CustomerApiService: new CustomerApiService()
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    async refresh() {
      try {
        const responseCustomers = await this.CustomerApiService.getById(1);
        this.customer = responseCustomers.data;
      } catch (error) {
        console.log(error)
      }
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

.customer-profile-container {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  overflow-x: auto;
  margin-left: 250px;
}

.customer-image-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 1rem;
  border-top: 4px solid #F0BE48;
  border-bottom: 4px solid #238ACF;

}

.customer-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  margin-bottom: px;
}

</style>
