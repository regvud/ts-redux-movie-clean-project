import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {MovieCard} from "../MovieCard/MovieCard";
import {IShortMovie} from "../../../interfaces";

const MovieList = () => {
    const {movieData} = useAppSelector(state => state.movies);

    return (
        <div style={{background: 'aliceblue'}}>
            {movieData?.results.map((movie: IShortMovie, id: number) => <MovieCard movie={movie} key={id}/>)}
        </div>
    );
};

export {MovieList};