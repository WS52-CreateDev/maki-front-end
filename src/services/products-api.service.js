import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class ProductsApiService {
    async getProducts() {
        return await http.get('products');
    }
    async getProductById(id) {
        return await http.get('products/'+id)
    }
    async getArtisans() {
        return await http.get('artisan');
    }
    async createProduct(body) {
        return await http.post('products',body)
    }
}