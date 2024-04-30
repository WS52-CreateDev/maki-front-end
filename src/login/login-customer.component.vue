<template>

  <div class="login-container">
    <div class="login-image-container">
      <img src="/public/client-sign.jpg" alt="Customer Login Image" class="login-image">
    </div>
    <div class="login-card">

      <div class="login-card-header">
        <img src="/src/assets/maki-logo-horizontal.svg"alt="MakiLogo"class="maki-logo">
    </div>

      <div class="p-fluid">
        <label> <h1>{{$t('loginCustomer')}}</h1> </label>
        <div class="p-field">
          <label for="email">{{$t('email')}}</label>
          <pv-input-text id="email" v-model="email"></pv-input-text>
        </div>
        <div class="p-field">
          <label for="password">{{$t('password')}}</label>
          <pv-input-text id="password" v-model="password" type="password"></pv-input-text>
        </div>
        <div class="p-d-flex p-jc-center p-mb-3">
          <pv-button @click="login()">{{$t('login')}}</pv-button>
        </div>
        <div class="p-d-flex p-jc-center">
          <router-link to="/register-customer" class="register-link"> {{$t('addressing')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import {CustomerApiService} from "../services/customer-api.service..js";

export default {
  name: "LoginCustomer",
  data() {
    return {
      email: "",
      password: "",
      customerApiService: new CustomerApiService(),
    };
  },
  methods: {
    async login() {
      const body = {
        email: this.email,
        password: this.password,
      };

      const response = await this.customerApiService.loginCustomer(
          body.email,
          body.password
      );

      if (response.data.length > 0) {
        const userId = response.data[0].id;
        const isArtisan = response.data[0].isArtisan;
        alert("Login successful");
        router.push({ path: '/products', query: { userId: userId, isArtisan: isArtisan } });
        this.$store.commit("SET_CUSTOMER", response.data[0]);
      } else {
        alert("Invalid email or password.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #aaf193 60%, #ffffff 50%);
}

.login-image-container {
  width: 50%;
  margin-right: 20px;
}

.login-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.login-card {
  width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f9f9f9;
}
.login-card-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.maki-logo {
  width: 125px;
}
.p-field {
  margin-bottom: 20px;
}

.register-link {
  color: #007bff;
  margin-top: 10px;
  display: block;
}


</style>
