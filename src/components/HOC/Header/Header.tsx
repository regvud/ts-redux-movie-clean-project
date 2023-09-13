import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './header.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";

const Header = () => {
    const {theme} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const changeTheme = () => {
// dispatch()
    };

    return (
        <div className={styles.header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <button onClick={changeTheme}>Turn theme</button>
        </div>
    );
};

export {Header};