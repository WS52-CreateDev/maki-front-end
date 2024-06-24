<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>

<template>
  <the-toolbar/>
  <div class="update-profile-form">
    <div class="customer-image">
      <img :src="customer.photo" :alt="customer.name" />
    </div>

    <div class="customer-form">

        <div>
          <p>{{$t('email')}}:</p>
          <pv-input-text class = 'customer-email' type="text" v-model="customerEmail"> </pv-input-text>
        </div>

        <div>
            <p>{{$t('name')}}:</p>
            <pv-input-text class = 'customer-name' type="text" v-model="customerName"> </pv-input-text>
        </div>

        <div>
          <p>{{$t('lastName')}}:</p>
          <pv-input-text class = 'customer-surname' type="text" v-model="customerSurname"> </pv-input-text>
        </div>

        <div>
          <p>{{$t('phone')}}:</p>
          <pv-input-text class = 'customer-phone' type="text" v-model="customerPhone"> </pv-input-text>
        </div>

        <div>
          <p>{{$t('address')}}:</p>
          <pv-input-text class = 'customer-address' type="text" v-model="customerAddress"> </pv-input-text>
        </div>

    </div>

    <div class="customer-form-2">
      <div>
        <p>{{$t('photoURL')}}:</p>
        <pv-input-text class = 'customer-photo' type="text" v-model="customerPhoto"> </pv-input-text>
      </div>

      <div>
        <p>{{ $t('age') }}:</p>
        <pv-input-text class = 'customer-age' type="text" v-model="customerAge"> </pv-input-text>
      </div>

      <div>
        <p>{{$t('province')}}: </p>
        <pv-input-text class = 'customer-province' type="text" v-model="customerProvince"> </pv-input-text>
      </div>

      <div>
        <p>{{$t('description')}}: </p>
        <pv-input-text class='customer-info' type="text" v-model="customerInfo"></pv-input-text>
      </div>

    </div>

    <div class="btnUpdate">
      <PvButton class = 'UpdateProfile-btn' @click="update()"> {{$t('updateProfile')}} </PvButton>
    </div>

  </div>

</template>

<script>
  import {CustomerApiService} from "../services/customer-api.service..js";
  import router from "../router.js";
  export default {
    name: "updateProfile",
    data(){
      return{

        customerName: '',
        customerSurname: '',
        customerPhone:'',
        customerAddress:'',
        customerEmail:'',
        customerPhoto:'',
        customerAge: '',
        customerProvince: '',
        customerInfo: '',
        customerPassword: '',
        customerProducts:[],
        customer: [],
        CustomerApiService: new CustomerApiService()
      }
    },
    mounted() {
      this.refresh()
    },
    methods: {

      async update() {
        const body ={
          name: this.customerName,
          surname: this.customerSurname,
          phone: this.customerPhone,
          address: this.customerAddress,
          email: this.customerEmail,
          photo: this.customerPhoto,
          age: this.customerAge,
          province: this.customerProvince,
          info: this.customerInfo,
          password: this.customerPassword,
          isArtisan: this.customerisArtisan,
          products : this.customerProducts
        }
        const userId = sessionStorage.getItem('userId')
        const responseUpdate = await this.CustomerApiService.update(body,userId);

        if(responseUpdate.status == 200){
          alert("Customer updated successfully.");
          this.refresh();
          router.push({ path: '/profile-customer'});
        }else{
          alert("Error updating customer")
        }
      },

      async refresh(){
        const userId = sessionStorage.getItem('userId');
        const responseCustomer = await this.CustomerApiService.getById(userId);
        this.customer = responseCustomer.data;
        this.customerName = responseCustomer.data.name;
        this.customerSurname = responseCustomer.data.surname;
        this.customerPhone = responseCustomer.data.phone;
        this.customerAddress = responseCustomer.data.address;
        this.customerEmail = responseCustomer.data.email;
        this.customerPhoto = responseCustomer.data.photo;
        this.customerAge = responseCustomer.data.age;
        this.customerProvince = responseCustomer.data.province;
        this.customerInfo = responseCustomer.data.info;
        this.customerPassword= responseCustomer.data.password;
        this.customerisArtisan = responseCustomer.data.isArtisan;
        this.customerProducts = responseCustomer.data.products;
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
  .customer-form{
    margin-left:50px;
    border-radius: 10px;
  }

  .customer-form-2{
    margin-left:50px;
    border-radius: 10px;
  }

  .customer-email{
    border: 2px solid #67823A;
    margin-bottom:20px;
  }

  .customer-name{
    border: 2px solid #F1BE48;
    margin-bottom:20px;
  }

  .customer-surname{
    border: 2px solid #B7A9E0;
    margin-bottom:20px;
  }

  .customer-phone{
    border:2px solid #0077C8;
    margin-bottom:20px;
  }

  .customer-address{
    border:2px solid #67823A;
    margin-bottom:20px;
  }

  .customer-photo{
    border:2px solid #67823A;
    margin-bottom:20px;
    width: 300px;
  }

  .customer-age{
    border:2px solid #F1BE48;
    margin-bottom:20px;
    width: 300px;
  }

  .customer-province{
    border: 2px solid #B7A9E0;
    margin-bottom:20px;
    width: 300px;
  }

  .customer-info{
    border:2px solid #0077C8;
    margin-bottom:20px;
    width: auto;
    height:auto;
  }


  .customer-image{
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    border-radius: 1rem;
    border-top: 4px solid #67823A;
    border-bottom: 4px solid #B7A9E0;
  }
  .customer-image img {
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