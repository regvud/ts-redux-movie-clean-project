import {MovieCard} from "../MovieCard/MovieCard";
import {useAppSelector} from "../../../hooks/reduxHooks";

const MovieList = () => {
    const {movieData} = useAppSelector(state => state.movies);

    return (
        <div>
            {movieData.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MovieList};