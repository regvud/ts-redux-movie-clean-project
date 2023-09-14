import {MovieCard} from "../MovieCard/MovieCard";
import {useAppSelector} from "../../../hooks/reduxHooks";
import css from './movielist.module.css'

const MovieList = () => {
    const movieData = useAppSelector(state => state.movies.movieData);

    return (
        <div className={css.list}>
            {movieData.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MovieList};