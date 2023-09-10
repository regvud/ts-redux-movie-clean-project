import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: () => apiService.get(urls.genres.base)
}

export {
    genreService
}