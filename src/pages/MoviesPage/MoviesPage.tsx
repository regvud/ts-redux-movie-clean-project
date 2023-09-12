import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MovieList} from "../../components/Movies";
import {movieActions} from "../../redux/slices/movieSlice";

const MoviesPage: FC = () => {
    const dispatch = useAppDispatch();
    const [params, setParams] = useSearchParams({page: '1'});
    const {status} = useAppSelector(state => state.movies);
    const currentPage = params.get('page')

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);

    return (
        <>
            {status === 'pending' ?
                <>
                    <h1>loading</h1>
                </> :
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
                    <MovieList/>
                </>
            }
        </>
    );
}
export {MoviesPage};