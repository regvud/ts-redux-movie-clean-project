import {NavLink} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/movieSlice";
import icon from '../../../assets/istockphoto-879131204-612x612.jpg'
import css from './header.module.css'

const Header = () => {
    const theme = useAppSelector(state => state.movies.theme);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        dispatch(movieActions.themeSwitch())
    };

    return (
        <div className={theme ? css.dark : css.light}>
            <button className={css.button} onClick={changeTheme}>{theme ? 'Light Mode' : 'Dark Mode'}</button>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <div className={css.icon}>
                <img src={icon} alt="user-icon"/>
                <span>username</span>
            </div>
        </div>
    );
};

export {Header};