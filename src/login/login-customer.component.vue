<template>
  <div class="login-container">
    <div class="login-image-container">
      <img src="/public/client-sign.jpg" alt="Customer Login Image" class="login-image">
    </div>
    <div class="login-card">
      <div class="p-fluid">
        <label>
        <h1>Login as Customer </h1>
            </label>
        <div class="p-field">
          <label for="email">Email</label>
          <pv-input-text id="email" v-model="email"></pv-input-text>
        </div>
        <div class="p-field">
          <label for="password">Password</label>
          <pv-input-text id="password" v-model="password" type="password"></pv-input-text>
        </div>
        <div class="p-d-flex p-jc-center p-mb-3">
          <pv-button @click="login()">Login</pv-button>
        </div>
        <div class="p-d-flex p-jc-center">
          <router-link to="/register-customer" class="register-link">Don't have an account? Register here</router-link>
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
        alert("Login successful.");
        router.push("/home-customer");
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

.p-field {
  margin-bottom: 20px;
}

.register-link {
  color: #007bff;
  margin-top: 10px;
  display: block;
}
</style>
