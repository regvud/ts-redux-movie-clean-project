import {apiService} from "./apiService";
import {movieToken, urls} from "../constants";
import {IMovieResponse} from "../interfaces";
import axios from "axios/index";

const movieService = {
    getAllMovies: (page: number) => {
        return apiService.get<IMovieResponse>(urls.movies.base, {
                headers: {
                    'Authorization': `Bearer ${movieToken}`,
                },
                params: {page}
            }
        );
    },


}

export {
    movieService
}