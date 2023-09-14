import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MovieList} from "../../components/Movies";
import {movieActions} from "../../redux/slices/movieSlice";
import {Pagination} from "../../components/HOC";
import css from './moviepage.module.css'

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.movies.theme);
    const [params] = useSearchParams({page: '1'});
    const currentPage = params.get('page')

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);


    return (
        <>
            <div className={theme ? css.dark : css.light}>
                <Pagination page={currentPage} total_pages={500}/>
                <MovieList/>
            </div>
        </>
    )
        ;
}
export {MoviesPage};