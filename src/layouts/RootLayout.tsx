import React from 'react';
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
            <h1>header</h1>
            <Outlet/>
        </div>
    );
};

export {RootLayout};