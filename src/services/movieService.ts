import {apiService} from "./apiService";
import {movieToken, urls} from "../constants";
import {IFullMovie, IMovieResponse} from "../interfaces";


const movieService = {
    getAllMovies: (page: number) => apiService.get<IMovieResponse>(urls.movies.base, {

        params: {page}
    }),
    byID: (id: number) => apiService.get<IFullMovie>(urls.movies.byID(id), {
        headers: {
            'Authorization': `Bearer ${movieToken}`,
        },

    })


}

export {
    movieService
}