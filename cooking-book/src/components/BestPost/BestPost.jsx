import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useProperties from "../../hooks/useProperties";
import LastSearchPostMain from "../LastSearchPostMain/LastSearchPostMain";

const BestPost = () => {
    const [user] = useAuth();
    const { randomRecipe, allPosts } = useProperties();
    const [lastSearch, setLastSearch] = useLocalStorage('last-search', null);

    const handleNo = () => setLastSearch(null);

    const lastFoundRandomRecipe = lastSearch ? allPosts.filter(post => post.name.toLowerCase().includes(lastSearch.toLowerCase()))[0] : null;

    return (
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
            <br />
            <h2>{randomRecipe.name}</h2>
            <p>{randomRecipe.shortContent}</p>
            <p>{randomRecipe.longContent}</p>
            <p>Kod rabatowy na mikser: </p>
            {user
                ?
                <p>#KBCC123</p>
                :
                <p>Log in</p>
            }
            <hr />
        </div>
    )
}

export default BestPost;