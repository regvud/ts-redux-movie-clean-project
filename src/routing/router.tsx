import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";

import {RootLayout} from "../layouts";
import {GenrePage, MoviesPage} from "../pages";
import {MovieExtended, SearchMovie} from "../components/Movies";
import {MoviesByGenre} from "../components/Genres";

const Index = () => {
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
                    element: <MovieExtended/>
                },
                {
                    path: 'genres',
                    element: <GenrePage/>
                },
                {
                    path: 'genres/:name',
                    element: <MoviesByGenre/>,
                },
                {
                    path: 'genres/:name/:id',
                    element: <MovieExtended/>
                },
                {
                    path: 'search/movie',
                    element: <SearchMovie/>
                },
                {
                    path: 'search/movie/:id',
                    element: <MovieExtended/>
                }

            ]
        }
    ]);
    return <RouterProvider router={router}/>;
}

export {Index}