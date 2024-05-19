<template>
  <div class="shopping-cart">
    <div v-if="productos.length === 0" class="empty-cart">
      <p>No hay productos en el carrito.</p>
    </div>
    <div v-else>
      <ul class="product-list">
        <li v-for="(producto, index) in productos" :key="index" class="product">
          <div class="product-info">
            <img :src="producto.image" alt="Imagen del Producto" class="product-image"/>
            <div class="product-details">
              <span class="product-name">{{ producto.name }}</span>
              <span class="product-price">{{ producto.price | currency }}</span>
            </div>
          </div>
          <div class="product-quantity">
            <label for="quantity">Cantidad:</label>
            <input type="number" v-model.number="producto.quantity" min="1" @change="updateQuantity(index, producto.quantity)" class="quantity-input"/>
          </div>
          <button @click="removeProduct(index)" class="remove-button">Eliminar</button>
        </li>
      </ul>
      <p class="total">Total: {{ total | currency }}</p>
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
      return this.productos.reduce((total, producto) => total + (producto.price * producto.quantity), 0);
    }
  },
  methods: {
    removeProduct(index) {
      this.$emit('eliminar', index);
    },
    updateQuantity(index, quantity) {
      if (quantity < 1) {
        this.productos[index].quantity = 1;
      }
      this.$emit('update-quantity', { index, quantity });
    }
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  margin: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.shopping-cart h2 {
  text-align: center;
  margin-bottom: 20px;
}

.empty-cart {
  text-align: center;
}

.product-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-weight: bold;
}

.product-price {
  color: #888;
}

.product-quantity {
  display: flex;
  align-items: center;
}

.quantity-input {
  width: 50px;
  margin-left: 10px;
}

.remove-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.remove-button:hover {
  background-color: #ff7875;
}

.total {
  text-align: right;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
}
</style>
