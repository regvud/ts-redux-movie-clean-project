import {createBrowserRouter, Navigate} from "react-router-dom";

import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {MovieExtended, MovieList} from "../components/Movies";
import {Genres} from "../components/Genres/Genres";
import {movieActions} from "../redux/slices/movieSlice";
import {store} from "../redux/store";


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
                        element: <MovieList/>,
                    },
                ]
            },
            {
                path: 'movies/:id',
                element: <MovieExtended/>,
                loader: async ({params}) => {
                    return store.dispatch(movieActions.getFullMovie(+params))
                }
            },
            {
                path: 'genres',
                element: <Genres/>
            }
        ]
    }
]);

export {router}