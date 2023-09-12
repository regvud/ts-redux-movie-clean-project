import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import {Genre} from "./Genre/Genre";
import styles from './genres.module.css'
import {IGenre} from "../../interfaces";

interface Prop {
    info: object,
    results: []
}

const Genres = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch]);


    return (
        <div className={styles.css}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};