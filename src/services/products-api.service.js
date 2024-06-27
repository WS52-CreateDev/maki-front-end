import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:5122/api'
})
export class ProductsApiService {
    async getProducts() {
        return await http.get('/Product');
    }
    async getProductById(id) {
        return await http.get('/Product/'+id)
    }
    async getArtisans() {
        return await http.get('/Artisan');
    }
    async createProduct(body) {
        return await http.post('/Product',body)
    }
    async getProductsByArtisan(artisanId) {
        return await http.get(`alehandraxx/maki-products/products?artisan=${artisanId}`);
    }
}