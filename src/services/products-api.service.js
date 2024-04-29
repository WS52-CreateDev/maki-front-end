import axios from "axios";

const http = axios.create({
    baseURL:'https://my-json-server.typicode.com/'
})
export class ProductsApiService {
    async getProducts() {
        return await http.get('alehandraxx/maki-products/products');
    }
    async getProductById(id) {
        return await http.get('alehandraxx/maki-products/products/'+id)
    }
    async getArtisans() {
        return await http.get('alehandraxx/maki-artisans/artisan');
    }
    async createProduct(body) {
        return await http.post('alehandraxx/maki-products/products',body)
    }
}