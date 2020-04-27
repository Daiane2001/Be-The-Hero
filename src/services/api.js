import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', 
});

export default api; //assim todos os arquivos conseguirão importar este 