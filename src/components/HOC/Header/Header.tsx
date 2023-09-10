import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './header.module.css'

const Header = () => {
    console.log('reng');
    return (
        <div className={styles.header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
        </div>
    );
};

export {Header};