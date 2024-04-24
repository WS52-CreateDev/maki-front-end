import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000', // Ajusta la URL según tu API falsa
});

export class CustomerApiService {
    async getAll() {
        return await http.get('customer');
    }

    async getById(id) {
        return await http.get('customer/' + id);
    }

    async create(body) {
        return await http.post('customer', body);
    }

    async update(body, id) {
        return await http.put('customer/' + id, body);
    }

    async delete(id) {
        return await http.delete('customer/' + id);
    }


    async loginCustomer(email, password) {
        return http.get(`customer?email=${email}&password=${password}`);
    }


}
