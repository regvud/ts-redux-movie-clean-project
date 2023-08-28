import {baseURL} from "../constants";
import axios from "axios";

const apiService = axios.create({baseURL})

export {
    apiService
}