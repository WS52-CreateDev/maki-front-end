<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>

<template>
    <TheToolbar />
  
    <div class="header">
        <div>
            <PvButton label="<" class="btn btn-goback"></PvButton>
        </div>
        <div class="header2">
            <h1>Diseños solicitados</h1>
        </div>

    </div>
  
    <div class="designs-container">
      <ul>
        <li v-for="design in designs" :key="design.id" class="design">
     
            <div class="design-image-container">
              <img :src="design.photo" :alt="design.name" />
            </div>
              <div class="design-info">
                <div>
                    <h2>Enviado por: {{ design.id }}</h2>
                    <h2>Nombre del producto: "{{ design.name }}"</h2>
                    <p>Caracteristicas: </p>
                    <div class="design-info2"><p>{{ design.caracteristics }}</p></div>
                    
                </div>
              
              </div>
              <div class="design-buttons">
                <ul><PvButton label="Aceptar diseño" class="btn btn-accept"></PvButton></ul>
                <ul><PvButton label="Rechazar diseño" class="btn btn-reject"></PvButton></ul>
                
              </div>
 
        </li>
      </ul>
    </div>
  </template>

<script>
import { DesignApiService } from "../services/desing-request-api.service";
export default {
  name: 'list-design',
  data() {
    return {
      designs: [],
      DesignApiService: new DesignApiService()
    }
  },
  mounted() {
    this.refresh();
  },
  
  methods: {
    async refresh(){
        try{
            const responseDesigns = await this.DesignApiService.getDesigns();
            this.designs = responseDesigns.data;

        } catch(error){
            console.error('Error al obtener diseños', error);
        }
    }
  }
}
</script>

<style scoped>

@media (hover: hover) {
  .product-pv-card img:hover {
    transform: scale(1.1);
  }
  .artisan-pv-card:hover {
    transition: 0.4s ease;
    transform: scale(1.1);
  }
}


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

.designs-container {
 display:flex;
  justify-content: flex-start; 
  padding: 20px;
  overflow-x: auto; 
  margin-left: 250px;
}

.design {
    display:flex;
    width: 1400px; 
    max-width: 1400px; 
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
 
}   

.design-image-container {
  width: 300px; 
  height: 300px; 
  overflow: hidden; 
  border-radius: 1rem;
  border-top: 4px solid #F0BE48;
  border-bottom: 4px solid #238ACF;

}

.design-image-container img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    
}

.design-info {
    display: flex;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 20px;
  align-items: center;
  
}
.design-info2 {
  font-size: 16px;
  width: 500px; 

  
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


.btn-accept {
  margin-right: 10px;
}
.btn-goback {
  margin-right: 650px;
}

.btn-reject {
  background-color: #BF9BDE; 
}

</style>