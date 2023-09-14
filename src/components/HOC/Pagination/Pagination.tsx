import React, {FC, useRef, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

import css from './pagination.module.css'

interface Props {
    page: string
    total_pages?: number,
}

const Pagination: FC<Props> = ({page, total_pages}) => {
    const [, setParams] = useSearchParams({page});
    const navigate = useNavigate();
    const searchRef = useRef('')
    const [inputError, setInputError] = useState(null)


    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchRef.current = e.target.value
        setInputError(null)
    }

    const onSearchButton = () => {
        if (searchRef.current !== '') {
            navigate('/search/movie', {state: searchRef.current})
        } else {
            setInputError('Enter search request')
        }
    }

    return (
        <div className={css.pagination}>
            <button className={css.button}
                    disabled={+page <= 1}
                    onClick={() => setParams({page: (+page - 1).toString()})}>{'<<<'}
            </button>
            <label>
                <input className={css.searchInput} placeholder={'search request'} type="text"
                       onChange={onSearchInputChange}
                       onKeyDown={(e) => e.key === 'Enter' && onSearchButton()}/>
                {inputError && <b><span> {`<- ${inputError}`} </span></b>}
                <button className={css.searchButton} onClick={onSearchButton}>search</button>
            </label>
            <button className={css.button}
                    disabled={+page >= total_pages}
                    onClick={() => setParams({page: (+page + 1).toString()})}>{'>>>'}
            </button>
        </div>
    );
};

export {Pagination};