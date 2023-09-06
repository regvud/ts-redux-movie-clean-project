import {urls} from "../constants";
import {apiService} from "./apiService";

const posterService = {
    getPosterByID: (id: number) => apiService(urls.posters.byID(id))

}

export {
    posterService
}