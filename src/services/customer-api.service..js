import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5122/api',
});

export class CustomerApiService {
    async getAll() {
        return await http.get('/Customer');
    }

    async getById(id) {
        return await http.get('/Customer/' + id);
    }

    async create(body) {
        return await http.post('/Customer', body);
    }

    async update(id, body) {
        return await http.put('/Customer/' + id, body);
    }

    async delete(id) {
        return await http.delete('/Customer/' + id);
    }

    async loginCustomer(body) {
        return http.post(`/Customer/login`, body);
    }

}
