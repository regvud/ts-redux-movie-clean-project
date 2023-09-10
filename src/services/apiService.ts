import {baseURL, movieToken} from "../constants";
import axios from "axios";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(
    req => {
        req.headers.Authorization = `Bearer ${movieToken}`
        return req
    }
)

export {
    apiService
}