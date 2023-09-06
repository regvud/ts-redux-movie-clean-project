import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {IShortMovie} from "../../../interfaces";
import {MovieCard} from "../MovieCard/MovieCard";

const MovieList = () => {
    const {movieData} = useAppSelector(state => state.movies);

    return (
        <div style={{background: 'aliceblue'}}>
            {movieData?.results.map((movie: IShortMovie, id: number) => <MovieCard movie={movie} key={id}/>)}
        </div>
    );
};

export {MovieList};