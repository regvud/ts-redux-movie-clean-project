import React, {useEffect} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {MovieCard} from "../MovieCard/MovieCard";
import {Pagination} from "../../HOC/";
import {movieActions} from "../../../redux/slices/movieSlice";
import cssTheme from '../../../pages/MoviesPage/moviepage.module.css'
import css from '../../Movies/MovieList/movielist.module.css'

const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const moviesBySearch = useAppSelector(state => state.movies.moviesBySearch);
    const theme = useAppSelector(state => state.movies.theme);
    const {state} = useLocation();
    const [params] = useSearchParams({page: '1', query: state});
    const currentPage = params.get('page')
    const query = localStorage.getItem('query')

    if (state !== null) {
        localStorage.setItem('query', state)
    }

    useEffect(() => {
        dispatch(movieActions.getMoviesBySearch({page: +currentPage, query: state ? state : query}))
    }, [state, currentPage]);

    return (
        <div className={theme ? cssTheme.dark : cssTheme.light}>
            <Pagination page={currentPage} total_pages={moviesBySearch?.total_pages}/>
            <div className={css.list}>
                {moviesBySearch?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {SearchMovie};