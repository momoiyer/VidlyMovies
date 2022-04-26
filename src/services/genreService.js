import http from './httpsService';
import config from '../config.json';

export function getGenres() {
    return http.get(config.apiGenres); 
}
