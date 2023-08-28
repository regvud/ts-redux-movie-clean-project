import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts";
import {MoviesPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <MoviesPage/>,
            }
        ]
    }
]);

export {router}