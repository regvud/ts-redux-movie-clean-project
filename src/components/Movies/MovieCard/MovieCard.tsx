import React, {FC} from 'react';
import {IShortMovie} from "../../../interfaces";

interface IProps {
    movie: IShortMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {title, id, poster_path} = movie;
    return (
        <div>
            <hr/>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{poster_path}</h2>
        </div>
    );
};

export {MovieCard};