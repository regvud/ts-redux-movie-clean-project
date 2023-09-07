import React, {useEffect} from 'react';
import {useAppDispatch} from "../hooks/reduxHooks";
import {movieActions} from "../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";
import {MovieList} from "../components/Movies";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [params, setParams] = useSearchParams({page: '1'});
    const currentPage = params.get('page')

    useEffect(() => {
        dispatch(movieActions.getAllMovies(+currentPage))
    }, [currentPage]);


    const handlePage = (action: '-' | '+'): void => {

        if (action === '+') {
            const incrementedPage = (parseInt(currentPage) + 1).toString()
            setParams({page: incrementedPage})

        } else {
            const decrementedPage = (parseInt(currentPage) - 1).toString()
            setParams({page: decrementedPage})
        }

    }

    console.log('render');
    return (
        <>
            <div>
                <button
                    disabled={+currentPage <= 1}
                    onClick={() => handlePage('-')}>prev
                </button>

                <button
                    disabled={+currentPage >= 500}
                    onClick={() => handlePage('+')}>next
                </button>
            </div>
            <MovieList/>
        </>
    );
};

export {MoviesPage};