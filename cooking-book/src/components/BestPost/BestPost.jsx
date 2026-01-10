import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useProperties from "../../hooks/useProperties";
import LastSearchPost from "../LastPost/LastSearchPost";

const BestPost = () => {
    const user = useAuth();
    const { recipe, allPosts } = useProperties();
    const [lastSearch, setLastSearch] = useLocalStorage('last-search', null);

    const handleNo = () => setLastSearch(null);

    const lastFoundRecipe = lastSearch ? allPosts.filter(post => post.name.toLowerCase().includes(lastSearch.toLowerCase()))[0] : null;

    return (
        <div>

            {lastSearch
                ?
                <LastSearchPost
                    lastRec={lastFoundRecipe}
                    onNo={handleNo}
                />
                : null
            }
            <h2>{recipe.name}</h2>
            <p>{recipe.shortContent}</p>
            <p>{recipe.longContent}</p>
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