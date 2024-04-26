import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class DesignApiService {
    async getDesigns() {
        return await http.get('design');
    }
 
    async createDesign(body) {
        return await http.post('design',body)
    }
}