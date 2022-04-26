import http from './httpsService';
import config from '../config.json';

const apiEndpoint = config.apiUrl + '/users';

function registerUser(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    }); 
}

export default {
    registerUser
}