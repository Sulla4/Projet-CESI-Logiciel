import axios from 'axios';

const API_URL = 'http://192.168.245.1:80/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'auth/signin', {
                id: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.token !== '') {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'account/', {
            firstnameUser: user.firstnameUser,
            lastnameUser: user.lastnameUser,
            email: user.email,
            userPhone: user.userPhone,
            nameUser: user.nameUser,
            siretUser: user.siretUser,
            addressUser: user.addressUser,
            mpUser: user.mpUser,
            pointsUser: user.pointsUser,
            isSponsorUser: user.isSponsorUser,
            isSponsorisedUser: user.isSponsorisedUser,
            role_idRole: user.role_idRole,
            cpCityID: user.cpCityID
        });
    }
}

export default new AuthService();
