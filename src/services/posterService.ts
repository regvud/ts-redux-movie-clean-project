import axios from "axios";
import {urls} from "../constants";

const posterService = {
    getPosterByPath: (path: string): Promise<any> => axios.get(urls.posters.byPath(path))
}

export {
    posterService
}