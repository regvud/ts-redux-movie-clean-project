import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IShortMovie} from "../../../interfaces";
import {StarsRatingBadge} from "../../StarsRatingBadge";
import {posterURL} from "../../../constants";
import css from './moviecard.module.css'

interface IProps {
    movie: IShortMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {title, id, poster_path, vote_average} = movie;
    const navigate = useNavigate();
    const transferToFullMovie = (id: number) => {
        navigate(`${id}`)
    }

    return (
        <>
            {poster_path &&
                <div className={css.card}>
                    <h2>{title}</h2>
                    <img src={`${posterURL}${poster_path}`} alt={title} onClick={() => transferToFullMovie(id)}/>
                    <h3>Rating:</h3>
                    <StarsRatingBadge vote_average={vote_average}/>
                </div>
            }
        </>
    );
}
export {MovieCard};