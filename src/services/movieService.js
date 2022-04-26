import http from './httpsService';
import config from '../config.json';

const apiEndpoint = config.apiUrl + '/movies';

function movieUrl(id){
    return `${apiEndpoint}/${id}`;
}

export function getMovies() {
    return http.get(apiEndpoint); 
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId)); 
}

export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}

export async function saveMovie(movie) {    
    const body = { ...movie };
    delete body._id;

    if (movie._id) 
        return http.put(movieUrl(movie._id), body);
    
    return http.post(apiEndpoint, body);
}