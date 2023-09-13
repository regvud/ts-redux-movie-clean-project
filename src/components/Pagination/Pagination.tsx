import React, {FC, useRef, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";


interface Props {
    total_pages?: number,
}

const Pagination: FC<Props> = ({total_pages}) => {
    const [params, setParams] = useSearchParams({page: '1'});
    const navigate = useNavigate();
    const searchRef = useRef('')
    const [inputError, setInputError] = useState(null)
    const currentPage = params.get('page')

    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchRef.current = e.target.value
        setInputError(null)
    }

    const onSearchButton = () => {

        if (searchRef.current !== '') {
            navigate('/search/movie', {replace: true, state: searchRef.current})
        }

        setInputError('You have to type a search request!')
    }

    return (
        <div>
            <button
                disabled={+params.get('page') <= 1}
                onClick={() => setParams({page: (+currentPage - 1).toString()})}>prev
            </button>
            <label>
                <input placeholder={'search...'} type="text" onChange={onSearchInputChange}/>
                {inputError && <span>{inputError}</span>}
                <button onClick={onSearchButton}>search</button>
            </label>
            <button
                disabled={+params.get('page') >= total_pages}
                onClick={() => setParams({page: (+currentPage + 1).toString()})}>next
            </button>
        </div>
    );
};

export {Pagination};