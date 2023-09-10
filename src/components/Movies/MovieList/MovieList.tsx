import React, {FC} from 'react';

import {IMovieResponse} from "../../../interfaces";
import {MovieCard} from "../MovieCard/MovieCard";

interface IProps {
    movieData: IMovieResponse
}

const MovieList: FC<IProps> = ({movieData}) => {
    return (
        <div>
            {movieData?.results.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MovieList};