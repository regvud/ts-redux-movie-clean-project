import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {Genre} from "../../Genres";
import {movieActions} from "../../../redux/slices/movieSlice";
import {posterURL} from "../../../constants";
import css from './movieExtended.module.css'

const MovieExtended = () => {
    const dispatch = useAppDispatch();
    const fullMovie = useAppSelector(state => state.movies.fullMovie);
    const theme = useAppSelector(state => state.movies.theme);
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getFullMovie(+id))
    }, [id]);

    return (
        <div className={theme ? css.dark : css.light}>
            <h1>{fullMovie?.title}</h1>
            <img src={`${posterURL}${fullMovie?.poster_path}`} alt={fullMovie?.title}/>
            <h3>Overview:</h3>
            <p>{fullMovie?.overview}</p>
            <h3>Genres:</h3>
            <div className={css.genres}>
                {fullMovie?.genres.map((value, id) => <Genre key={id} genre={value} navigation={false}/>)}
            </div>
            <h3>Original title:</h3>
            <span>{fullMovie?.original_title}</span>
            <h3>Budget:</h3>
            <span>{fullMovie?.budget} $</span>
            <h3>Release Date:</h3>
            <span>{fullMovie?.release_date}</span>

        </div>
    );
};

export {MovieExtended};