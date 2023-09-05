import React, {useEffect, useState} from 'react';
import {MovieList} from "../components/Movies/MovieList/MovieList";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieActions} from "../redux/slices/movieSlice";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {movieService} from "../services";
import {movieToken, urls} from "../constants";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {page, total_pages} = useAppSelector(state => state.movies);
    const [params, setParams] = useSearchParams({page: '1'});
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getAllMovies(page))
    }, [page]);


    const thisPage = params.get('page')
    const removeParams = () => {
        params.delete('page')
    }

    console.log(params.get('page'))
    const handlePage = () => {
        dispatch(movieActions.incrementPage())
        if (page) {
            setParams({page: page.toString()})

        }
    }

    return (
        <>
            <button
                disabled={thisPage === '1'}
                onClick={handlePage}>prev
            </button>

            <button
                disabled={page > total_pages}
                onClick={handlePage}>next
            </button>

            <MovieList/>
        </>
    );
};

export {MoviesPage};