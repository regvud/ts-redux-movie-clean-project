import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "../../components/Genres";
import {genreActions} from "../../redux/slices/genreSlice";
import css from "./genres.module.css";

const GenrePage = () => {
    const dispatch = useAppDispatch();
    const genres = useAppSelector(state => state.genres.genres);
    const theme = useAppSelector(state => state.movies.theme);

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch]);

    console.log('genre render');
    return (
        <div className={theme ? css.dark : css.light}>
            {genres.map(genre => <Genre key={genre.id} genre={genre} navigation={true}/>)}
        </div>
    );
};

export {GenrePage};