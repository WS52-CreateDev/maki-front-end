<template>
  <div class="container">
    <img src="/src/assets/maki-logo-horizontal.svg" alt="Maki Logo" style="width:250px;" aria-hidden="true" />

    <h1>{{ $t('title') }}</h1>
    <div class="content">
      <div class="image-wrapper">
        <img class="image bordered" src="/public/client-sign.jpg" alt="Left Image" usemap="#clientmap">
        <map name="clientmap">
          <area shape="rect" coords="0,0,200,400" @click="goToLogInCliente" alt="Cliente">
        </map>
        <button @click="goToLogInCliente" class="rounded-button">{{ $t("client") }}</button>
      </div>
      <div class="vertical-line"></div>
      <div class="image-wrapper">
        <img class="image bordered" src="/public/artesano-sign.jpg" alt="Right Image" usemap="#artisanmap">
        <map name="artisanmap">
          <area shape="rect" coords="0,0,200,400" @click="goToLogInArtesano" alt="Artesano">
        </map>
        <button @click="goToLogInArtesano" class="rounded-button">{{ $t("artisan") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "general-login",
  methods: {
    goToLogInCliente() {
      this.$router.push('/login-customer');
    },
    goToLogInArtesano() {
      this.$router.push('/login-artisan');
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  width: 100%;
  padding-top: 80px;
  background: linear-gradient(to bottom, #aaf193 60%, #ffffff 50%);
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  margin: 0 0 30px;
  font-weight: bold;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  height: auto;
  max-width: 400px;
}

.bordered {
  border: 1px solid black;
}

.rounded-button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #b469e4;
  color: white;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.rounded-button:hover {
  background-color: #e33daf;
}

.vertical-line {
  width: 1px;
  height: 500px;
  background-color: black;
  margin: 0 20px;
}

@media (max-width: 768px) {
  .image {
    max-width: 100%;
  }

  .content {
    flex-direction: column;
  }

  .image-wrapper {
    margin-bottom: 20px;
  }

  .rounded-button {
    padding: 15px 30px;
    font-size: 20px;
    margin: 10px auto;
  }

  .vertical-line {
    display: none;
  }


}
</style>