import React, {useEffect} from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieActions} from "../redux/slices/movieSlice";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getAllMovies({page}))
    }, [page]);

    return (
        <>
            <button></button>
            <MovieList/>
        </>
    );
};

export {MoviesPage};