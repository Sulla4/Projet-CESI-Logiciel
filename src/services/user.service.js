import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://192.168.245.1:80/account/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL /*+ 'all'*/);
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }
}

export default new UserService();

