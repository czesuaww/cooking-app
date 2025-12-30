import { useState } from "react";
import './Searchbar.module.css';
import style from './Searchbar.module.css';

const Searchbar = (props) => {
    const [term, setTerm] = useState('');

    const search = (e) => setTerm(e.target.value)

    const searchRecepie = () => props.onSearch(term);

    const enterSearch = (e) => e.key === 'Enter' ? props.onSearch(term) : null;

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