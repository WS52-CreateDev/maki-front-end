<template>
  <div class="carrito">
    <h2>Carrito de Compras</h2>
    <div v-if="productos.length === 0">
      <p>No hay productos en el carrito.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="(producto, index) in productos" :key="index" class="producto">
          <div class="producto-info">
            <img :src="producto.image" alt="Product Image" style="display: block; margin: 2rem auto 0; border-radius: 20px; width:150px; height:150px;"/>
            <span>{{ producto.name }}</span>
            <span>{{ producto.price }}</span>
          </div>
          <button @click="eliminarProducto(index)">Eliminar</button>
        </li>
      </ul>
      <p>Total: ${{ total }}</p>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    productos: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    total() {
      return this.productos.reduce((total, producto) => total + producto.price, 0);
    }
  },
  methods: {
    eliminarProducto(index) {
      this.$emit('eliminar', index);
    }
  }
};
</script>

<style scoped>
.carrito {
  margin: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.producto {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.producto-info {
  display: flex;
  flex-direction: column;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>