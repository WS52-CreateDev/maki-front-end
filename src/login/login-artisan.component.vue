
<template>
  <div class="login-container">
    <div class="login-image-container">
      <img src="/public/artesano-sign.jpg" alt="Artisan Login Image" class="login-image">
    </div>
    <div class="login-card">
      <div class="login-card-header">
        <img src="/src/assets/maki-logo-horizontal.svg"alt="MakiLogo"class="maki-logo">
      </div>
      <div class="p-fluid">
        <label>
          <h1> {{ $t('loginArtisan') }}</h1>
          </label>
        <div class="p-field">
          <label for="email">{{ $t('email') }}</label>
          <pv-input-text id="email" v-model="email"></pv-input-text>
        </div>
        <div class="p-field">
          <label for="password">{{ $t('password') }}</label>
          <pv-input-text id="password" v-model="password" type="password"></pv-input-text>
        </div>
        <div class="p-d-flex p-jc-center p-mb-3">
          <pv-button @click="login()">{{$t('login')}}</pv-button>
        </div>
        <div class="p-d-flex p-jc-center">
          <router-link to="/register-artisan" class="register-link">{{$t('addressing')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import {ArtisanApiService} from "../services/artisan-api.service.js";

export default {
  name: "Login-Artisan",
  data() {
    return {
      email: "",
      password: "",
      artisanApiService: new ArtisanApiService(),
    };
  },
  methods: {
    async login() {
      const body = {
        email: this.email,
        password: this.password,
      };

      const response = await this.artisanApiService.loginArtisan(
          body
      );

      if (response.data && response.data.id) {
        alert("Login successful.");
        const userId = response.data.id;
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('isArtisan',1)
        router.push({ path: '/products' });
        this.$store.commit("SET_ARTISAN", response.data);
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
.maki-logo {
  width: 125px;
}
.login-card-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
