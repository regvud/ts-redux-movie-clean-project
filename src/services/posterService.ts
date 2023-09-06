import axios from "axios";
import {urls} from "../constants";

const posterService = {
    getPosterByPath: (path: string) => axios.get<FormData>(urls.posters.byPath(path), {withCredentials: false})
}

export {
    posterService
}