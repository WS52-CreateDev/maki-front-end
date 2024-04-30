<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>

<template>
  <the-toolbar/>
  <div class="update-profile-form">
    <div class="artisan-image">
      <img :src="artisan.photo" :alt="artisan.name" />
    </div>

    <div class="artisan-form">

      <div>
        <p>Email:</p>
        <pv-input-text class = 'artisan-email' type="text" v-model="artisanEmail"> </pv-input-text>
      </div>

      <div>
        <p>Nombre:</p>
        <pv-input-text class = 'artisan-name' type="text" v-model="artisanName"> </pv-input-text>
      </div>

      <div>
        <p>Apellido:</p>
        <pv-input-text class = 'artisan-surname' type="text" v-model="artisanSurname"> </pv-input-text>
      </div>

      <div>
        <p>Telefono:</p>
        <pv-input-text class = 'artisan-phone' type="text" v-model="artisanPhone"> </pv-input-text>
      </div>

      <div>
        <p>Direccion:</p>
        <pv-input-text class = 'artisan-address' type="text" v-model="artisanAddress"> </pv-input-text>
      </div>

      <div>
        <p>URL Foto:</p>
        <pv-input-text class = 'artisan-photo' type="text" v-model="artisanPhoto"> </pv-input-text>
      </div>

    </div>

    <div class="artisan-form-2">
      <div>
        <p>Edad:</p>
        <pv-input-text class = 'artisan-age' type="text" v-model="artisanAge"> </pv-input-text>
      </div>

      <div>
        <p>Provincia: </p>
        <pv-input-text class = 'artisan-province' type="text" v-model="artisanProvince"> </pv-input-text>
      </div>

      <div>
        <p>Descripción: </p>
        <pv-input-text class='artisan-info' type="text" v-model="artisanInfo"></pv-input-text>
      </div>

      <div>
        <p>Nombre de Negocios: </p>
        <pv-input-text class='artisan-businessName' type="text" v-model="artisanBusinessName"></pv-input-text>
      </div>

      <div>
        <p>Direccion de Negocios: </p>
        <pv-input-text class='artisan-businesAddress' type="text" v-model="artisanBusinessAddress"></pv-input-text>
      </div>

    </div>

    <div class="btnUpdate">
      <PvButton class = 'UpdateProfile-btn' @click="update()"> Actualizar Perfil </PvButton>
    </div>

  </div>

</template>

<script>
import {ArtisanApiService} from "../services/artisan-api.service.js";
import router from "../router.js";
export default {
  name: "updateProfileArtisan",
  data(){
    return{

      artisanName: '',
      artisanSurname: '',
      artisanPhone:'',
      artisanAddress:'',
      artisanEmail:'',
      artisanPhoto:'',
      artisanAge: '',
      artisanProvince: '',
      artisanInfo: '',
      artisanPassword: '',
      artisanBusinessName:'',
      artisanBusinessAddress:'',
      artisanProducts:[],
      artisan: [],
      ArtisanApiService: new ArtisanApiService()
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {

    async update() {
      const body ={
        name: this.artisanName,
        surname: this.artisanSurname,
        phone: this.artisanPhone,
        address: this.artisanAddress,
        email: this.artisanEmail,
        photo: this.artisanPhoto,
        age: this.artisanAge,
        province: this.artisanProvince,
        info: this.artisanInfo,
        password: this.artisanPassword,
        isArtisan: this.artisanisArtisan,
        businessName: this.artisanBusinessName,
        businessAddress: this.artisanBusinessAddress,
      }
      const userId = this.$route.query.userId;
      const isArtisan = this.$route.query.isArtisan;
      const responseUpdate = await this.ArtisanApiService.update(body,userId);

      if(responseUpdate.status == 200){
        alert("artisan updated successfully.");
        this.refresh();
        router.push({ path: '/profile-artisan',query: { userId: userId, isArtisan: isArtisan}});
      }else{
        alert("Error updating artisan")
      }
    },

    async refresh(){
      const userId = this.$route.query.userId;
      const responseartisan = await this.ArtisanApiService.getById(userId);
      this.artisan = responseartisan.data;
      this.artisanName = responseartisan.data.name;
      this.artisanSurname = responseartisan.data.surname;
      this.artisanPhone = responseartisan.data.phone;
      this.artisanAddress = responseartisan.data.address;
      this.artisanEmail = responseartisan.data.email;
      this.artisanPhoto = responseartisan.data.photo;
      this.artisanAge = responseartisan.data.age;
      this.artisanProvince = responseartisan.data.province;
      this.artisanInfo = responseartisan.data.info;
      this.artisanPassword= responseartisan.data.password;
      this.artisanisArtisan = responseartisan.data.isArtisan;
      this.artisanBusinessName = responseartisan.data.businessName;
      this.artisanBusinessAddress = responseartisan.data.businessAddress;
    }
  }
}
</script>

<style scoped>
.btnUpdate{
  display: flex;
  width: 320px;
  height: 90px;
  padding: 20px;
  overflow-x: auto;
  margin-left: 70px;
}

.update-profile-form{
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  overflow-x: auto;
  margin-left: 70px;
}
.artisan-form{
  margin-left:50px;
  border-radius: 10px;
}

.artisan-form-2{
  margin-left:50px;
  border-radius: 10px;
}

.artisan-email{
  border: 2px solid #67823A;
  margin-bottom:20px;
}

.artisan-name{
  border: 2px solid #F1BE48;
  margin-bottom:20px;
}

.artisan-surname{
  border: 2px solid #B7A9E0;
  margin-bottom:20px;
}

.artisan-phone{
  border:2px solid #0077C8;
  margin-bottom:20px;
}

.artisan-address{
  border:2px solid #67823A;
  margin-bottom:20px;
}

.artisan-photo{
  border:2px solid #67823A;
  margin-bottom:20px;
  width: 300px;
}

.artisan-age{
  border:2px solid #F1BE48;
  margin-bottom:20px;
  width: 300px;
}

.artisan-province{
  border: 2px solid #B7A9E0;
  margin-bottom:20px;
  width: 300px;
}

.artisan-info{
  border:2px solid #0077C8;
  margin-bottom:20px;
  width: auto;
  height:auto;
}


.artisan-image{
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  border-top: 4px solid #67823A;
  border-bottom: 4px solid #B7A9E0;
}
.artisan-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.UpdateProfile-btn{
  background-color:#67823A;
  width: 15rem;
  border-color:#67823A;
  justify-content: center;
  border-radius:1.5rem;
}


</style>