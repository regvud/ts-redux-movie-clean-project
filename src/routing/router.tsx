import {createBrowserRouter, Navigate} from "react-router-dom";
import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {MovieExtended} from "../components/Movies";

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
            },
            {
                path: 'movies/:id',
                element: <MovieExtended/>,
            }
        ]
    }
]);

export {router}