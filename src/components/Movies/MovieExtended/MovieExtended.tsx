import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {movieActions} from "../../../redux/slices/movieSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";

const MovieExtended = () => {
    const {fullMovie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const {original_title} = fullMovie;

    useEffect(() => {
        dispatch(movieActions.getFullMovie(+id))
    }, []);

    return (
        <>
            {
                fullMovie ?
                    <div>
                        <h1>{original_title}</h1>
                    </div> : <h1>loading</h1>
            }
        </>
    );
};

export {MovieExtended};