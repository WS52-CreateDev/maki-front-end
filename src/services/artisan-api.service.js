import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5122/api',
});

export class ArtisanApiService {
    async getAll() {
        return await http.get('/Artisan');
    }

    async getById(id) {
        return await http.get('/Artisan/' + id);
    }

    async create(body) {
        return await http.post('/Artisan/', body);
    }

    async update(id,body){
        return await http.put('/Artisan/' + id,body);
    }

    async loginArtisan(body) {
        return http.post(`/Artisan/login`, body);
    }

}
