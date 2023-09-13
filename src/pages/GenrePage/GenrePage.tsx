import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import styles from "./genres.module.css";
import {Genre} from "../../components/Genres";

const GenrePage = () => {
    const dispatch = useAppDispatch();
    const genres = useAppSelector(state => state.genres.genres);

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, []);

    console.log('genre render');
    return (
        <div className={styles.css}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenrePage};