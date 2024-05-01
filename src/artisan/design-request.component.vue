<script setup>
import TheToolbar from "/public/the-toolbar.component.vue";
</script>

<template>
    <TheToolbar />
  
    <div class="header">
        <div>
            <div class = "button-container">
                <RouterLink to="/profile-artisan"><pv-button class="btn-back" icon="pi pi-arrow-left" rounded aria-label="Filter" /></RouterLink>
                <RouterLink to="/profile-artisan"><p style="font-weight: bold; font-size: 1.5rem;">{{$t('go_back')}}</p></RouterLink>
            </div>
        </div>
       
        <div class="header2">
            <h1>{{ $t('featuredDesign') }}</h1>

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
                    <h2>{{ $t('Submitted_by') }} {{ design.userName }}</h2>
                    <h2>{{ $t('productname') }} "{{ design.name }}"</h2>
                    <p>{{ $t('Features') }}</p>
                    <div class="design-info2"><p>{{ design.caracteristics }}</p></div>
                    
                </div>
              
              </div>
              <div class="design-buttons">
                <ul><PvButton :label="$t('accept_desing')" class="btn btn-accept"></PvButton></ul>
                <ul><PvButton :label="$t('decline_design')" class="btn btn-reject" @click="rejectProduct(design.id)"></PvButton></ul>
                
              </div>
 
        </li>
      </ul>
    </div>
  </template>

<script>
import { DesignApiService } from "../services/desing-request-api.service";
import { CustomerApiService } from "../services/customer-api.service.";
export default {
  name: 'list-design',
  data() {
    return {
      designs: [],
      DesignApiService: new DesignApiService(),
      CustomerApiService: new CustomerApiService()
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
            for (let design of this.designs) {
            design.userName = await this.GetUserName(design.UserId);
        }
    

        } catch(error){
            console.error('Error al obtener diseños', error);
        }
    },
    async rejectProduct() {
    const response = await this.designApiService.deleteDesign(this.id);
    if (response.status === 200) {
        alert("Design deleted successfully.");
        window.location.reload(); // Recargar la página
    } else {
        alert("Error deleting design.");
    }
},
    async GetUserName(userId){
        try{
            const response = await this.CustomerApiService.getById(userId);
            return response.data.name;
        }catch(error){
            console.error('Error al obtener el nombre del usuario', error);
        return 'Usuario desconocido';
        }
    },

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
    /* margin: 20px; */
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
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