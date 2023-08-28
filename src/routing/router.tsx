import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>
    }
])

export {router}