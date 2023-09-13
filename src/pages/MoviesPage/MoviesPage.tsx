import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks/reduxHooks";
import {MovieList} from "../../components/Movies";
import {movieActions} from "../../redux/slices/movieSlice";
import {Pagination} from "../../components/Pagination";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({page: '1'});
    const currentPage = params.get('page')

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);

    console.log(currentPage)

    return (
        <>
            <Pagination page={currentPage} total_pages={500}/>
            <MovieList/>
        </>
    );
}
export {MoviesPage};