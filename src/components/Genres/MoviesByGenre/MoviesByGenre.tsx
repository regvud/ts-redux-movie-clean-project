import React, {useEffect} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {MovieCard} from "../../Movies";
import {Pagination} from "../../Pagination";

const MoviesByGenre = () => {
    const dispatch = useAppDispatch();
    const moviesByGenre = useAppSelector(state => state.movies.moviesByGenre);
    const {state} = useLocation();
    const [params] = useSearchParams({page: '1', with_genre: state});
    const currentPage = params.get('page')
    const genreID = localStorage.getItem('genreID')

    if (state !== null) {
        localStorage.setItem('genreID', state)
    }

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({with_genres: state ? state : +genreID, page: +currentPage}))

        return () => {
            dispatch(movieActions.resetMoviesByGenre())
        }
    }, [state, currentPage]);

    console.log(moviesByGenre)
    return (
        <div>
            <Pagination page={currentPage} total_pages={moviesByGenre?.total_pages}/>
            {moviesByGenre?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesByGenre};