import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {movieActions} from "../../../redux/slices/movieSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {posterURL} from "../../../constants";

const MovieExtended = () => {
    const {fullMovie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getFullMovie(+id))
        dispatch(movieActions.resetFullMovie())
    }, []);


    return (
        <>
            {
                fullMovie &&
                <div>
                    <h1>{fullMovie?.title}</h1>
                    <img src={`${posterURL}${fullMovie?.poster_path}`} alt={fullMovie?.title}/>
                    <p>{fullMovie?.overview}</p>

                    <h3>Genres</h3>
                    <ul>
                        {fullMovie?.genres.map((value, id) => <li key={id}>{value.name}</li>)}
                    </ul>
                </div>
            }
        </>
    );
};

export {MovieExtended};