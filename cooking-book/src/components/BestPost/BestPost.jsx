import useLocalStorage from "../../hooks/useLocalStorage";
import useProperties from "../../hooks/useProperties";
import LastSearchPostMain from "../LastSearchPostMain/LastSearchPostMain";
import style from '../BestPost/BestPost.module.css';
import { useEffect, useState } from "react";
import axios from "../../axios";
import objectToArrayWithId from "../../lib/objects";

const BestPost = () => {
    const { randomRecipe } = useProperties();
    const [lastSearch, setLastSearch] = useLocalStorage('last-search', null);
    const [fetchedRecipe, setFetchedRecipe] = useState(null);

    useEffect(() => {
        const getData = async () => {
            if (!lastSearch) return;

            try {
                const res = await axios.get(`/recepies.json`);
                const allData = objectToArrayWithId(res.data);
                const lastSearched = allData.find(post => post.title?.toLowerCase().includes(lastSearch.toLowerCase()));

                setFetchedRecipe(lastSearched);
            } catch (err) {
                console.error('ERROR GET DATA:', err);
            }
        }
        getData();
    }, [lastSearch]);

    const handleNo = () => {
        setLastSearch(null);
        setFetchedRecipe(null);
    };

    return (
        <div className={style.container}>
            {lastSearch && fetchedRecipe && (
                <LastSearchPostMain
                    lastRec={fetchedRecipe}
                    onNo={handleNo}
                />
            )}

            {randomRecipe ? (
                <div className={style.glassCard}>
                    <div className={style.header}>
                        <span className={style.badge}>Recommendation</span>
                        <h2 className={style.title}>{randomRecipe.title}</h2>
                    </div>

                    <p className={style.description}>
                        {randomRecipe.description}
                    </p>
                </div>
            ) : (
                null
            )}
        </div>
    );
}

export default BestPost;