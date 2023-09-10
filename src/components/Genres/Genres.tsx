import React, {useEffect} from 'react';
import {genreActions} from "../../redux/slices/genreSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

const Genres = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch]);

    return (
        <ul>
            {genres.map(value => <li key={value.id}>{value.name}</li>)}
        </ul>
    );
};

export {Genres};