import React, {useEffect} from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieActions} from "../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {page, total_pages} = useAppSelector(state => state.movies);
    const [, setParams] = useSearchParams();

    useEffect(() => {
        dispatch(movieActions.getAllMovies(page))
        setParams({page: page.toString()})
    }, [page]);


    return (
        <>
            <button
                disabled={page === 1}
                onClick={() => {
                    dispatch(movieActions.decrementPage())
                }}>prev
            </button>

            <button
                disabled={page === total_pages}
                onClick={() => {
                    dispatch(movieActions.incrementPage())
                }}>next
            </button>

            <MovieList/>
        </>
    );
};

export {MoviesPage};