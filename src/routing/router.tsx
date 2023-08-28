import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {movieService} from "../services";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <MoviesPage/>,
                // loader: movieService.getAllMovies
            }
        ]
    }
]);

export {router}