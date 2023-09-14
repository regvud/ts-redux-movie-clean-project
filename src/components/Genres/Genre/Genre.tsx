import React, {FC} from 'react';

import styles from './genre.module.css'
import {IGenre} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre,
    navigation?: boolean
}

const Genre: FC<IProps> = ({genre, navigation}) => {
    const navigate = useNavigate();
    const {id, name} = genre;

    const onGenreClick = () => {
        navigate(`${name.toLowerCase()}`, {state: id})
    }

    return (
        <div className={styles.css} onClick={navigation ? onGenreClick : null}>
            {name}
        </div>
    );
};

export {Genre};