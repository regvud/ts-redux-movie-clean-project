import React, {useEffect} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {MovieCard} from "../../Movies";
import {Pagination} from "../../HOC";
import css from '../../Movies/MovieList/movielist.module.css'
import cssTheme from '../../../pages/MoviesPage/moviepage.module.css'

const MoviesByGenre = () => {
    const dispatch = useAppDispatch();
    const {state} = useLocation();
    const moviesByGenre = useAppSelector(state => state.movies.moviesByGenre);
    const theme = useAppSelector(state => state.movies.theme);
    const [params] = useSearchParams({page: '1', with_genre: state});
    const currentPage = params.get('page')
    const genreID = localStorage.getItem('genreID')

    if (state !== null) {
        localStorage.setItem('genreID', state)
    }

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({with_genres: state ? state : +genreID, page: +currentPage}))
    }, [state, currentPage]);

    return (
        <div className={theme ? cssTheme.dark : cssTheme.light}>
            <Pagination page={currentPage} total_pages={moviesByGenre?.total_pages}/>
            <div className={css.list}>
                {moviesByGenre?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenre};