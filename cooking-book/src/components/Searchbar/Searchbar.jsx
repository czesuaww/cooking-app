import './Searchbar.module.css';
import style from './Searchbar.module.css';
import useProperties from "../../hooks/useProperties";
import useLocalStorage from "../../hooks/useLocalStorage";

const Searchbar = () => {
    const [term, setTerm] = useLocalStorage('query', '');
    const { onSearch } = useProperties();
    const search = (e) => setTerm(e.target.value);

    const searchRecepie = () => onSearch(term);

    const enterSearch = (e) => e.key === 'Enter' ? onSearch(term) : null;

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