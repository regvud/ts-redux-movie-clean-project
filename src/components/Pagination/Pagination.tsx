import React, {useRef} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

const Pagination = () => {
    const [params, setParams] = useSearchParams({page: '1'});
    const navigate = useNavigate();
    const searchRef = useRef('')

    const currentPage = params.get('page')
    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchRef.current = e.target.value
    }

    const onSearchButton = () => {
        navigate('/search/movie', {replace: true, state: searchRef.current})
    }

    return (
        <div>
            <button
                disabled={+params.get('page') <= 1}
                onClick={() => setParams({page: (+currentPage - 1).toString()})}>prev
            </button>
            <label>
                <input placeholder={'search...'} type="text" onChange={onSearchInputChange}/>
                <button onClick={onSearchButton}>search</button>
            </label>
            <button
                disabled={+params.get('page') >= 500}
                onClick={() => setParams({page: (+currentPage + 1).toString()})}>next
            </button>
        </div>
    );
};

export {Pagination};