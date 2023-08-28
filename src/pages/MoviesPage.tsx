import React from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useLoaderData} from "react-router-dom";

const MoviesPage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <>
            <MovieList/>
        </>
    );
};

export {MoviesPage};