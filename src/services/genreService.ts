import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenreResponse} from "../interfaces";

const genreService = {
    getAll: () => apiService.get<IGenreResponse>(urls.genres.base)
}

export {
    genreService
}