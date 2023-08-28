import {apiService} from "./apiService";
import {movieToken, urls} from "../constants";
import {IMovieResponse} from "../interfaces";

const options = {headers: {'Authorization': `Bearer ${movieToken}`}};
const movieService = {
    getAllMovies: () => apiService.get<IMovieResponse>(urls.movies.base, options)
}

export {
    movieService
}