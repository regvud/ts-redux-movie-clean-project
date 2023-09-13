import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {MovieCard} from "../MovieCard/MovieCard";
import {useLocation, useSearchParams} from "react-router-dom";

const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const {moviesBySearch} = useAppSelector(state => state.movies);
    const {state} = useLocation();
    const [params] = useSearchParams({query: state});


    useEffect(() => {
        dispatch(movieActions.getMoviesBySearch(state))
    }, [dispatch]);


    console.log(state);
    return (
        <div>
            {moviesBySearch?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchMovie};