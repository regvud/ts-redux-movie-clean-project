import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MovieList} from "../../components/Movies";
import {movieActions} from "../../redux/slices/movieSlice";
import {Pagination} from "../../components/Pagination";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({page: '1'});
    const {status} = useAppSelector(state => state.movies);

    const currentPage = params.get('page')

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);

    return (
        <>
            <Pagination page={currentPage} total_pages={500}/>
            {status === 'pending' ?
                <h1>loading</h1> :
                <MovieList/>
            }
        </>
    );
}
export {MoviesPage};