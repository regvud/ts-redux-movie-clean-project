import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {MovieCard} from "../MovieCard/MovieCard";
import {IShortMovie} from "../../../interfaces";

const MovieList = () => {
    const {movieData, page} = useAppSelector(state => state.movies);
    console.log(page)
    return (
        <div>
            {movieData?.results.map((movie: IShortMovie, id: number) => <MovieCard movie={movie} key={id}/>)}
        </div>
    );
};

export {MovieList};