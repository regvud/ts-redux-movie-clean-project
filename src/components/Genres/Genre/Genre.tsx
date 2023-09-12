import React, {FC} from 'react';

import styles from './genre.module.css'
import {IGenre} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    const {id, name} = genre;

    const onGenreClick = () => {
        navigate(`${name.toLowerCase()}`, {state: id})
    }

    return (
        <div className={styles.css} onClick={onGenreClick}>
            {name}
        </div>
    );
};

export {Genre};