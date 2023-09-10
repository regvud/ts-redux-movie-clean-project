import React, {FC} from 'react';

import {IGenre} from "../../../interfaces";
import styles from './genre.module.css'

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <span className={styles.css}>
            {name}
        </span>
    );
};

export {Genre};