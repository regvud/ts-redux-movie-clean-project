import {MovieCard} from "../MovieCard/MovieCard";
import css from './movielist.module.css'
import {IShortMovie} from "../../../interfaces";
import {FC} from "react";

interface Props {
    movieData: IShortMovie[]
}

const MovieList: FC<Props> = ({movieData}) => {
    return (
        <div className={css.list}>
            {movieData.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MovieList};