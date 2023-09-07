import React, {FC} from 'react';
import {IShortMovie} from "../../../interfaces";
import {posterURL} from "../../../constants";
import {useNavigate} from "react-router-dom";


interface IProps {
    movie: IShortMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
        const {title, id, poster_path, release_date} = movie;
        const navigate = useNavigate();
        const transferToFullMovie = (id: number) => {
            navigate(`${id}`)

        }

        return (
            <>
                <hr/>
                <h2>{release_date}</h2>
                <h2>{title}</h2>
                <img src={`${posterURL}${poster_path}`} alt={title} onClick={() => transferToFullMovie(id)}/>
            </>
        );
    }
;

export {MovieCard};