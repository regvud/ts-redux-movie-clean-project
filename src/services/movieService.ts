import {apiService} from "./apiService";
import {urls} from "../constants";
import {IFullMovie, IMovieResponse} from "../interfaces";


const movieService = {
    getAllMovies: (page: number) => apiService.get<IMovieResponse>(urls.movies.base, {
        params: {page}
    }),
    byID: (id: number) => apiService.get<IFullMovie>(urls.movies.byID(id)),
    byGenre: (page: number, with_genres: number) => apiService.get<IMovieResponse>(urls.movies.base, {
        params: {page, with_genres}
    })
}

export {
    movieService
}