import React, {useEffect} from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useAppDispatch} from "../hooks/reduxHooks";
import {movieActions} from "../redux/slices/movieSlice";

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovies())
    }, []);
    return (
        <>
            <MovieList/>
        </>
    );
};

export {MoviesPage};