import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import {Genre} from "./Genre/Genre";
import styles from './genres.module.css'

const Genres = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);
    const [characters, setCharacters] = useState([])
    // useEffect(() => {
    //     dispatch(genreActions.getGenres())
    // }, [dispatch]);

    useEffect(() => {
        // fetch('https://rickandmortyapi.com/api/character').then(value => value.json()).then(json => setCharacters(json))
    }, []);

    console.log(characters);
    return (
        <div className={styles.css}>
            {/*{genres.map(genre => <Genre key={genre.id} genre={genre}/>)}*/}
            {/*{characters.map(genre => <Genre key={genre.id} genre={genre}/>)}*/}
        </div>
    );
};

export {Genres};