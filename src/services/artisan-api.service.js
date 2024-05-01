import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
});

export class ArtisanApiService {
    async getAll() {
        return await http.get('/artisan');
    }

    async getById(id) {
        return await http.get('/artisan/' + id);
    }

    async create(body) {
        return await http.post('artisan/', body);
    }

    async update(body,id){
        return await http.put('/artisan/' + id,body);
    }

    async loginArtisan(email, password) {
        return http.get(`/artisan?email=${email}&password=${password}`);
    }

}
