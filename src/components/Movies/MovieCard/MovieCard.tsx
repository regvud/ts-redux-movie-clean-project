import React, {FC} from 'react';

import {IShortMovie} from "../../../interfaces";
import {posterURL} from "../../../constants";
import {useNavigate} from "react-router-dom";
import {StarsRatingBadge} from "../../StarsRatingBadge";


interface IProps {
    movie: IShortMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {title, id, poster_path, release_date, vote_average, genre_ids} = movie;
    const navigate = useNavigate();
    const transferToFullMovie = (id: number) => {
        navigate(`${id}`)
    }

    return (
        <div>
            <h2>{title}</h2>
            <h2>{release_date}</h2>
            <img src={`${posterURL}${poster_path}`} alt={title} onClick={() => transferToFullMovie(id)}/>
            <StarsRatingBadge vote_average={vote_average}/>
        </div>
    );
}
export {MovieCard};