import './Searchbar.module.css';
import style from './Searchbar.module.css';
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from 'react-router';

const Searchbar = () => {
    const [term, setTerm] = useLocalStorage('query', '');
    const [, setLastSearch] = useLocalStorage('last-search', null);
    const navigate = useNavigate();
    const search = (e) => setTerm(e.target.value);

    const searchRecepie = () => {
        navigate({ pathname: '/search', search: `?fraze=${term}` })

        if (term.trim()) setLastSearch(term);
    }

    const enterSearch = (e) => e.key === 'Enter' ? searchRecepie(term) : null;

    return (
        <>
            <input
                name="searching"
                type="text"
                placeholder="Search recepie e.g. Chicken masala..."
                onChange={search}
                onKeyDown={enterSearch}
                value={term}
            />
            <button className={style.searchBtn} onClick={searchRecepie}>Search</button>
        </>
    )
}

export default Searchbar;