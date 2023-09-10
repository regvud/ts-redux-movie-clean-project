import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/HOC/Header/Header";

const RootLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {RootLayout};