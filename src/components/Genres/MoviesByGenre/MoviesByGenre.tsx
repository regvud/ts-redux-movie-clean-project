import React, {useEffect} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import {MovieCard} from "../../Movies";

const MoviesByGenre = () => {
    const dispatch = useAppDispatch();
    const {moviesByGenre} = useAppSelector(state => state.movies);
    const {state} = useLocation();
    const [params, setParams] = useSearchParams({page: '1', with_genre: state});
    const currentPage = params.get('page')
    const genreID = localStorage.getItem('genreID')

    if (state !== null) {
        localStorage.setItem('genreID', state)
    }

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({with_genres: state ? state : +genreID, page: +currentPage}))

        return () => {
            dispatch(movieActions.resetMoviesByGenre())
        }
    }, [state, currentPage]);

    console.log(genreID)

    return (
        <div>
            <div>
                <button
                    disabled={+currentPage <= 1}
                    onClick={() => setParams({page: (+currentPage - 1).toString(), with_genre: genreID})}>prev
                </button>
                <button
                    disabled={+currentPage >= 500}
                    onClick={() => setParams({page: (+currentPage + 1).toString(), with_genre: genreID})}>next
                </button>
            </div>
            {moviesByGenre?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesByGenre};