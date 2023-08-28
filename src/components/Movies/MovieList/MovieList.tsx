import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {MovieCard} from "../MovieCard/MovieCard";

const MovieList = () => {
    const {movieData} = useAppSelector(state => state.movies);
    return (
        <div>
            {movieData?.results.map((movie, id) => <MovieCard movie={movie} key={id}/>)}
        </div>
    );
};

export {MovieList};