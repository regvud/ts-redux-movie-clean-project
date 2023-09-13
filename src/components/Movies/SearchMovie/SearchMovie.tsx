import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {MovieCard} from "../MovieCard/MovieCard";
import {useLocation, useSearchParams} from "react-router-dom";
import {Pagination} from "../../Pagination";

const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const moviesBySearch = useAppSelector(state => state.movies.moviesBySearch);
    const {state} = useLocation();
    const [params] = useSearchParams({page: '1', query: state});
    const currentPage = params.get('page')
    const query = localStorage.getItem('query')

    if (state !== null) {
        localStorage.setItem('query', state)
    }

    useEffect(() => {
        dispatch(movieActions.getMoviesBySearch({page: +currentPage, query: state ? state : query}))

        return () => {
            dispatch(movieActions.resetMoviesBySearch())
        }
    }, [state, currentPage]);

    return (
        <div>
            <Pagination page={currentPage} total_pages={moviesBySearch?.total_pages}/>
            {moviesBySearch?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchMovie};