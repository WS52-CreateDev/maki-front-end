import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:5122/api'
})
export class DesignApiService {
    async getDesigns() {
        return await http.get('DesignRequest');
    }
 
    async createDesign(body) {
        return await http.post('DesignRequest',body)
    }
    async deleteDesign(id) {
        return await http.delete('/DesignRequest/' + id);
    }
}