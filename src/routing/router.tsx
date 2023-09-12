import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";

import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {MovieExtended} from "../components/Movies";
import {Genres} from "../components/Genres/Genres";

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
                    element: <Genres/>
                }
            ]
        }
    ]);
    return <RouterProvider router={router}/>;
}

export {Index}