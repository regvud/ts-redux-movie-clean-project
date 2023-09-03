import React, {useEffect, useState} from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieActions} from "../redux/slices/movieSlice";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {page, total_pages} = useAppSelector(state => state.movies);
    // const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(movieActions.getAllMovies(page))
    }, [page]);
    return (
        <>
            <button disabled={page === 1} onClick={() => {
                // setPage(prevState => prevState--)
                dispatch(movieActions.decrementPage())

            }}>prev
            </button>
            <button onClick={() => {
                // setPage(prevState => prevState++)

                dispatch(movieActions.incrementPage())
            }}>next
            </button>
            <MovieList/>
        </>
    );
};

export {MoviesPage};