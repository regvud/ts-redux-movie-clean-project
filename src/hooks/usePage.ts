import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export const usePage = (): void => {
    const [params, setParams] = useSearchParams({page: '1'});

    useEffect(() => {
        setParams({page: (+params.get('page') + 1).toString()})
    }, []);
}


