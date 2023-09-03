import React, {FC, useEffect, useState} from 'react';
import {IShortMovie} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {movieService, posterService} from "../../../services";
import {urls} from "../../../constants";

interface IProps {
    movie: IShortMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
        const {title, id, poster_path} = movie;
        // const {moviePoster} = useAppSelector(state => state.movies);
        // const dispatch = useAppDispatch();
        // console.log(moviePoster);
        //
        //
        // const [poster, setPoster] = useState(null)
        // useEffect(() => {
        //     // dispatch(movieActions.setPoster(poster_path))
        //     posterService.getPosterByPath(poster_path).then(value => console.log(value.data))
        // }, []);

        return (
            <>
                <hr/>
                <h2>{id}</h2>
                <h2>{title}</h2>
                <h2>{poster_path}</h2>
                <img src={`${urls.posters.base}${poster_path}`} alt="poster"/>
            </>
        );
    }
;

export {MovieCard};