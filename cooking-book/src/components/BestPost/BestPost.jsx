import useLocalStorage from "../../hooks/useLocalStorage";
import useProperties from "../../hooks/useProperties";
import LastSearchPostMain from "../LastSearchPostMain/LastSearchPostMain";
import style from '../BestPost/BestPost.module.css';

const BestPost = () => {
    const { randomRecipe, allPosts } = useProperties();
    const [lastSearch, setLastSearch] = useLocalStorage('last-search', null);

    const handleNo = () => setLastSearch(null);

    const lastFoundRandomRecipe = (lastSearch && allPosts.length > 0)
        ? allPosts.find(post =>
            (post.title)?.toLowerCase().includes(lastSearch.toLowerCase())
        )
        : null;

    return (
        <div className={style.container}>
            {lastSearch && lastFoundRandomRecipe && (
                <LastSearchPostMain
                    lastRec={lastFoundRandomRecipe}
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

                    <p className={style.extra}>{randomRecipe.ingredients}</p>
                </div>
            ) : (
                <p className={style.info}>No recipes found in database.</p>
            )}
        </div>
    );
}

export default BestPost;