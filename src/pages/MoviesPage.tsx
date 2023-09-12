import React, {FC, useEffect, useMemo} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {MovieList} from "../components/Movies";
import {movieActions} from "../redux/slices/movieSlice";

const MoviesPage: FC = () => {
    const dispatch = useAppDispatch();
    const [params, setParams] = useSearchParams({page: '1'});
    const {movieData} = useAppSelector(state => state.movies);

    const currentPage = useMemo(() => {
        return params.get('page')
    }, [setParams])

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);

    console.log(currentPage);
    return (
        <>
            <div>
                <button
                    disabled={+params.get('page') <= 1}
                    onClick={() => setParams({page: (+currentPage - 1).toString()})}>prev
                </button>
                <button
                    disabled={+params.get('page') >= 500}
                    onClick={() => setParams({page: (+currentPage + 1).toString()})}>next
                </button>
            </div>
            <MovieList movieData={movieData}/>
        </>
    );
}
export {MoviesPage};