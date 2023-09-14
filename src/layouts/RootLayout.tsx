import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/HOC";

const RootLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {RootLayout};