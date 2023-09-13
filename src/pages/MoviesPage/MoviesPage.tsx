import React, {useEffect, useRef, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MovieList} from "../../components/Movies";
import {movieActions} from "../../redux/slices/movieSlice";
import css from './moviepage.module.css'

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [params, setParams] = useSearchParams({page: '1'});
    const {status} = useAppSelector(state => state.movies);
    const currentPage = params.get('page')

    const searchRef = useRef('')
    const [searchInput, setSearchInput] = useState(null)

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);

    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchRef.current = e.target.value
    }

    const onSearchButton = () => {
        setSearchInput(searchRef.current)
    }


    return (
        <>
            <div className={css.buttons}>
                <button
                    disabled={+params.get('page') <= 1}
                    onClick={() => setParams({page: (+currentPage - 1).toString()})}>prev
                </button>
                <label>
                    <input placeholder={'search...'} type="text" onChange={onSearchInputChange}/>
                    <button onClick={onSearchButton}>search</button>
                </label>
                <button
                    disabled={+params.get('page') >= 500}
                    onClick={() => setParams({page: (+currentPage + 1).toString()})}>next
                </button>
            </div>
            {status === 'pending' ?
                <h1>loading</h1> :
                <MovieList/>
            }
        </>
    );
}
export {MoviesPage};