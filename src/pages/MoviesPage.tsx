import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {MovieList} from "../components/Movies";
import {movieActions} from "../redux/slices/movieSlice";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [params, setParams] = useSearchParams({page: '1'});
    const {movieData} = useAppSelector(state => state.movies);
    const currentPage = params.get('page')

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+params.get('page')))
    }, [currentPage]);

    // const handlePage = (action: '-' | '+'): void => {
    //     if (action === '+') {
    //         setParams(prev => {
    //             prev.set('page', (parseInt(params.get('page')) + 1).toString())
    //             return prev
    //         })
    //
    //     } else {
    //         // const decrementedPage = (parseInt(currentPage) - 1).toString()
    //         // setParams({page: decrementedPage})
    //         setParams(prev => {
    //             prev.set('page', (parseInt(params.get('page')) - 1).toString())
    //             return prev
    //         })
    //     }
    //
    // }

    const handlePage = (): void => {

        setParams(prev => {
            prev.set('page', (parseInt(params.get('page')) + 1).toString())
            return prev
        })

    }

    console.log(movieData);

    return (
        <>
            <div>
                <button
                    disabled={+params.get('page') <= 1}
                    onClick={handlePage}>prev
                </button>
                <button
                    disabled={+params.get('page') >= 500}
                    onClick={handlePage}>next
                </button>
            </div>
            <MovieList movieData={movieData}/>
        </>
    );
};

export {MoviesPage};