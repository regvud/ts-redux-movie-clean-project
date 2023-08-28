import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAllMovies: () => apiService.get(urls.movies.base)
}

export {
    movieService
}