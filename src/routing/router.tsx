import {createBrowserRouter, Navigate} from "react-router-dom";
import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {MovieExtended, MovieList} from "../components/Movies";

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
                children: [
                    {
                        index: true,
                        element: <MovieList/>
                    },
                    {
                        path: ':id',
                        element: <MovieExtended/>,
                    }
                ]
            },
        ]
    }
]);

export {router}