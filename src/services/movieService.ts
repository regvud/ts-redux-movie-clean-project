import {apiService} from "./apiService";
import {movieToken, urls} from "../constants";

const options = {headers: {'Authorization': `Bearer ${movieToken}`}};
const movieService = {
    getAllMovies: () => apiService.get(urls.movies.base, options)
}

export {
    movieService
}