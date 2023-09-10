import React from 'react';

import {useAppSelector} from "../../../hooks/reduxHooks";
import {IShortMovie} from "../../../interfaces";
import {MovieCard} from "../MovieCard/MovieCard";

const MovieList = () => {
    const {movieData} = useAppSelector(state => state.movies);
    console.log(movieData);
    return (
        <div>
            {movieData?.results.map((movie: IShortMovie, id: number) => <MovieCard movie={movie} key={id}/>)}
        </div>
    );
};

export {MovieList};