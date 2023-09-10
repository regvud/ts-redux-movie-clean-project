import {baseURL, movieToken} from "../constants";
import axios from "axios";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(
    value => {
        value.headers

    }
)
export {
    apiService
}