import { useContext, useState } from "react";
import './Searchbar.module.css';
import style from './Searchbar.module.css';
import PropertiesContext from "../context/PropertiesContext";

const Searchbar = () => {
    const searchContext = useContext(PropertiesContext);
    const [term, setTerm] = useState('');

    const search = (e) => setTerm(e.target.value)

    const searchRecepie = () => searchContext.onSearch(term);

    const enterSearch = (e) => e.key === 'Enter' ? searchContext.onSearch(term) : null;

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