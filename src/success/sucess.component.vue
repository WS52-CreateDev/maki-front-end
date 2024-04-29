<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>

<template>
  <TheToolbar/>
    <div class="design-request-form">
    
        <div class="card-content">
          <div class="header">
          <h1>¡Personalización Completa!</h1>
        </div>
          <form @submit.prevent="handleSubmit" style="
        margin: 50px">
        <div class="logo">
            <img src="/src/assets/maki-logo-horizontal.svg" alt="Maki Logo" style="width:125px;" aria-hidden="true" />

        </div>
        <div class="margen">
            <div class="image">
              <label for="designImage">
                <div class="circulo">
                  <img src="../assets/images/placeholder-image.jpg" alt="Foto del diseño">
                </div>
                <input type="file" id="designImage" class="design-image" @change="handleImageUpload" >
              </label>
            </div>
          <div class="text">
            <p>A continuación, el artesano se comunicará con usted por cualquier via disponible o registrada (Whatsapp, Correo Electronico, entre otros). Gracias</p>
          </div>
        </div>
        <div class="buttonn">
                <router-link to="/sucess">
                    <PvButton type="submit" class="btn btn-create" @click=create()>Pagina principal</PvButton>
                </router-link>
        </div>
    
          </form>
      </div>
    
    </div>
    </template>
    
    <script>
    import { DesignApiService } from "../services/desing-request-api.service";
    export default {
        name: "RegisterCustomer",
      data() {
        return {
          id: 3,
          designName: "",
          designCharacteristics: "",
          image: "",
          designApiService: new DesignApiService(),
        };
      },
      methods: {
        
        async create() {
          const body = {
            id: this.id,
            name: this.designName,
            caracterstics: this.designCharacteristics,
            image: this.image,
          };
    
          const response = await this.designApiService.createDesign(body);
    
          if (response.status === 201) {
            alert("Customer created successfully.");
            this.designName= "";
            this.designCharacteristics= ";"
            
     
          } else {
            alert("Error creating customer.");
          }
        },
      },
    };
    </script>
    
    <style scoped>
    .header {
      text-align: center;
      padding: 1px 0;
      color: rgb(29, 29, 29);
      font-size: 14px;
      font-weight: bold;
    
    }
    
    .design-request-form {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      position: relative; /* Establish positioning context */
    }
    
    .design-request-form h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 8px;
      
    }
    .design-name{
      border-radius: 2rem;
      border: 2px solid #F1BE48;
    }
    .form-group textarea {
      height: 200px;
      resize: vertical;
    }
    .design-characteristics{
      border-radius: 2rem;
      border: 2px solid #0077C8;
    }
    .design-image{
      border-radius: 2rem;
      border: 2px solid #BF9BDE;
    }
    
    .btn {
      background-color: #BF9BDE;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color:#67823A;
    }
    
    .btn-toggle {
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .btn-toggle i {
      transition: transform 0.3s;
    }
    .design-request-card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin: 20px auto; /* Add margin for separation */
      max-width: 600px; /* Adjust max-width as needed */
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #ccc;
    }
    
    .design-request-container {
      position: relative; /* Establish positioning context */
    }
    
    
    .design-request-card.open {
      display: block; /* Show the card when open */
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #ccc;
    }
    
    .card-content {
      padding: 20px;
      border: 4px solid #f1f1f1;
      border-radius: 1rem;
      margin: 50px;
    
    }
    
    .btn-toggle {
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .btn-toggle i {
      transition: transform 0.3s;
    }
    
    .btn-create {
      background-color: #67823A; 
      color: white;
      border: none; 
    
      padding: 10px 15px;
      cursor: pointer;
      margin-bottom: 3px;
      border-radius: 1rem;
    
    
    }
    
    .btn-create:hover {
      background-color: #67823A;
    }
    .image{
      display: flex;
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
    }
    .text{
      width:500px;
    }
    .margen{
      display: flex;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-evenly;
      align-items: center;
    }
    .buttonn{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .circulo{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #BF9BDE;
    }
    .circulo img {
      max-width: 50%; 
      max-height: 50%; 
    }
    .logo{
        align-items: center;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: center;
    }
    </style>