import React, {FC, useEffect} from 'react';
import {IShortMovie} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";

interface IProps {
    movie: IShortMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
        const {title, id, poster_path} = movie;
        const dispatch = useAppDispatch();

        // useEffect(() => {
        //     dispatch(movieActions.setPoster(poster_path))
        // }, [poster_path]);

        return (
            <div>
                <hr/>
                <h2>{id}</h2>
                <h2>{title}</h2>
                <h2>{poster_path}</h2>
                <img src={poster_path} alt="img"/>
            </div>
        );
    }
;

export {MovieCard};