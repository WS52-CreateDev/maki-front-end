<template>
  <div class="register-container">
    <div class="register-image-container">
      <img src="/public/artesano-sign.jpg" alt="Artisan Registration Image" class="register-image">
    </div>
    <div class="register-card">
      <div class="login-card-header">
        <img src="/src/assets/maki-logo-horizontal.svg" alt="MakiLogo" class="maki-logo">
      </div>
      <div class="p-fluid">
        <label> <h1> {{$t('register')}}</h1> </label>
        <div class="row">
          <div class="col-6">
            <div class="p-field">
              <label for="name">{{$t('name')}}</label>
              <pv-input-text id="name" v-model="name"></pv-input-text>
            </div>
            <div class="p-field">
              <label for="surname">{{$t('lastName')}}</label>
              <pv-input-text id="surname" v-model="surname"></pv-input-text>
            </div>
            <div class="p-field">
              <label for="phone">{{$t('phone')}}</label>
              <pv-input-text id="phone" v-model="phone"></pv-input-text>
            </div>
            <div class="p-field">
              <label for="address">{{$t('address')}}</label>
              <pv-input-text id="address" v-model="address"></pv-input-text>
            </div>
          </div>
          <div class="col-6">
            <div class="p-field">
              <label for="email">{{$t('email')}}</label>
              <pv-input-text id="email" v-model="email"></pv-input-text>
            </div>
            <div class="p-field">
              <label for="businessName">{{$t('businessName')}}</label>
              <pv-input-text id="businessName" v-model="businessName"></pv-input-text>
            </div>
            <div class="p-field">
              <label for="businessAddress">{{$t('businessAddress')}}</label>
              <pv-input-text id="businessAddress" v-model="businessAddress"></pv-input-text>
            </div>
            <div class="p-field">
              <label for="password">{{$t('password')}}</label>
              <pv-input-text id="password" v-model="password" type="password"></pv-input-text>
            </div>
          </div>
        </div>
        <div class="p-d-flex p-jc-center p-mb-3">
          <pv-button @click="create()">{{$t('create')}}</pv-button>
        </div>
        <div class="p-d-flex p-jc-center">
          <router-link to="/login-artisan">{{$t('addressingRegister')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ArtisanApiService } from "../services/artisan-api.service.js";

export default {
  name: "RegisterArtisan",
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      address: "",
      email: "",
      businessName: "",
      businessAddress: "",
      password: "",
      photo: "",
      artisanApiService: new ArtisanApiService(),
    };
  },
  methods: {
    async create() {
      const body = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        address: this.address,
        email: this.email,
        businessName: this.businessName,
        businessAddress: this.businessAddress,
        password: this.password,
        photo: this.photo,
        isArtisan: 1
      };

      const response = await this.artisanApiService.create(body);

      if (response.status === 201) {
        alert("Artisan created successfully.");
        // Clear input fields after successful registration
        this.name = "";
        this.surname = "";
        this.phone = "";
        this.address = "";
        this.email = "";
        this.businessName = "";
        this.businessAddress = "";
        this.password = "";
        this.photo = "";
      } else {
        alert("Error creating artisan.");
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #aaf193 60%, #ffffff 50%);

}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 10px;
}

.p-field {
  margin-bottom: 20px;
}
.maki-logo {
  width: 125px;
}
.login-card-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.register-image-container {
  width: 50%;
  margin-right: 20px;
}

.register-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.register-card {
  width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f9f9f9;
}

.p-field {
  margin-bottom: 20px;
}
</style>
