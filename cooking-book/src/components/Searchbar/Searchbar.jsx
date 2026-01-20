import './Searchbar.module.css';
import style from './Searchbar.module.css';
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Searchbar = () => {
    const [term, setTerm] = useLocalStorage('query', '');
    const [, setLastSearch] = useLocalStorage('last-search', null);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const search = e => setTerm(e.target.value);

    const searchRecepie = () => {
        if (term.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        navigate({ pathname: '/search', search: `?fraze=${term}` })

        if (term.trim()) setLastSearch(term);
    }

    const enterSearch = e => e.key === 'Enter' ? searchRecepie() : null;

    return (
        <div className={style.container}>
            <input
                className={style.search}
                name="searching"
                type="text"
                placeholder="Search recepie e.g. Chicken masala..."
                onChange={search}
                onKeyDown={enterSearch}
                value={term}
            />
            {error && <h1 className={style.error}>Input cannot be empty</h1>}
            <button className={style.searchBtn} onClick={searchRecepie}>Search</button>
        </div>
    )
}

export default Searchbar;