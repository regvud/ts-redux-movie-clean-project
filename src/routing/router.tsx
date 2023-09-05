import {createBrowserRouter, Navigate} from "react-router-dom";
import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {movieActions} from "../redux/slices/movieSlice";
import {movieService} from "../services";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>,
            }
        ]
    }
]);

export {router}