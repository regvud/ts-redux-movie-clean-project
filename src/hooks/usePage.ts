import {SetURLSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../redux/slices/movieSlice";

export const usePage = (action: string, currentPage: string, setter: SetURLSearchParams): void => {
    let thisPage = currentPage

    useEffect(() => {
        movieActions.getAllMovies(+thisPage)
    }, [])

    if (action === '+') {
        const incrementedPage = (parseInt(thisPage) + 1).toString()
        setter({page: incrementedPage})

    } else {
        const decrementedPage = (parseInt(thisPage) - 1).toString()
        setter({page: decrementedPage})
    }

}
