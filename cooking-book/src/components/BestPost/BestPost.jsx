import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useProperties from "../../hooks/useProperties";
import LastSearchPostMain from "../LastSearchPostMain/LastSearchPostMain";
import style from '../BestPost/BestPost.module.css';

const BestPost = () => {
    const [user] = useAuth();
    const { randomRecipe, allPosts } = useProperties();
    const [lastSearch, setLastSearch] = useLocalStorage('last-search', null);

    const handleNo = () => setLastSearch(null);

    const lastFoundRandomRecipe = lastSearch ? allPosts.filter(post => post.name.toLowerCase().includes(lastSearch.toLowerCase()))[0] : null;

    return (
        <div className={style.container}>
            <div>
                {lastSearch && lastFoundRandomRecipe
                    ?
                    (
                        <LastSearchPostMain
                            lastRec={lastFoundRandomRecipe}
                            onNo={handleNo}
                        />
                    )
                    :
                    null
                }
            </div>
            <br />
            <div>
                <h2>{randomRecipe.name}</h2>
                <p>{randomRecipe.shortContent}</p>
                <p>{randomRecipe.longContent}</p>
                <p>Mixer discount code:</p>
                {user
                    ?
                    <p>#KBCC123</p>
                    :
                    <p>Log in</p>
                }
                <hr />
            </div>
        </div>
    )
}

export default BestPost;