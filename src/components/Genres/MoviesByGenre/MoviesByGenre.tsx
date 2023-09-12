import React, {useEffect, useRef} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {MovieCard} from "../../Movies";

const MoviesByGenre = () => {
    const dispatch = useAppDispatch();
    const {moviesByGenre} = useAppSelector(state => state.movies);
    const {state, search} = useLocation();
    const [params, setParams] = useSearchParams({page: '1', with_genre: state});
    const currentPage = params.get('page')
    const stateRef = useRef(state)

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({id: state, page: +currentPage}))

        return () => {
            dispatch(movieActions.resetMoviesByGenre())
        }
    }, [state, currentPage]);

    return (
        <div>
            <div>
                <button
                    onClick={() => setParams({page: (+currentPage - 1).toString(), with_genre: stateRef.current})}>prev
                </button>
                <button
                    onClick={() => setParams({page: (+currentPage + 1).toString(), with_genre: stateRef.current})}>next
                </button>
            </div>
            {moviesByGenre?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesByGenre};