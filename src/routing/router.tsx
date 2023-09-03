import {createBrowserRouter, Navigate} from "react-router-dom";
import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";

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