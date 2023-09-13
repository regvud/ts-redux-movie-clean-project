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
            <button
                disabled={+page <= 1}
                onClick={() => setParams({page: (+page - 1).toString()})}>prev
            </button>
            <label>
                <input placeholder={'search request'} type="text" onChange={onSearchInputChange}/>
                {inputError && <b><span> {`<- ${inputError}`} </span></b>}
                <button onClick={onSearchButton}>search</button>
            </label>
            <button
                disabled={+page >= total_pages}
                onClick={() => setParams({page: (+page + 1).toString()})}>next
            </button>
        </div>
    );
};

export {Pagination};