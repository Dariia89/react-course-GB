import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from "react-redux";
import { getGists, searchGists } from "../../../store/gists";

// const URL = 'https://api.github.com/gists/public'

// const getGists = async () => {
//     const response = await fetch(URL, {
//         method: 'GET',
//     }); 

//     const data = await response.json();

//     return data;
// };

const searchGistsDebounced = debounce((query, dispatch) => {
    dispatch(searchGists(query));
}, 1000);

const buttons = Array.from({length: 10}).map((_, index) => index + 1);

export function GistsPage() {
    const dispatch = useDispatch();
    const { gists, loading, error, gistsSearch, loadingSearch, errorSearch } = useSelector((state) => state.gists);
    const [value, setValue] = useState('bogdanq');

    useEffect(() => {
        dispatch(getGists());
    }, [dispatch]);

    useEffect(() => {
        searchGistsDebounced(value, dispatch);
    }, [dispatch, value]);

    if (loading || loadingSearch) {
        return <h1>loading...</h1>;
    }

    if (error || errorSearch) {
        return <h1>error...</h1>;
    }

    // const [gists, setGists] = useState([]);
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             setLoading(true);
    //             const response = await getGists();
    //             setGists(response);
    //         } catch(e) {
    //             setError(e);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchData();
    // }, [])

    return (
        <div>
            <h1>GistsPage</h1>

            {gists && gists.map(gist => (
                <h2 key={gist.url}>{gist.url}</h2>
            ))}

            {buttons.map(button => (
                <button onClick={() => dispatch(getGists(button))} key={button}>{button}</button>
            ))}

            <hr />

            <div>
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder='Введите имя'
                />

                {gistsSearch && gistsSearch.map(gist => (
                    <h2 key={gist.url}>{gist.url}</h2>
                ))}
            </div>
        </div>
    )
}