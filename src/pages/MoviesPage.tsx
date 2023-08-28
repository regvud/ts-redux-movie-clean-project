import React from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useLoaderData} from "react-router-dom";
import {movieToken} from "../constants";

const MoviesPage = () => {
    // const data = useLoaderData();
    // console.log(data)
    console.log(movieToken)
    return (
        <>
            <MovieList/>
        </>
    );
};

export {MoviesPage};