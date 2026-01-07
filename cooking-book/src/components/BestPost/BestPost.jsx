import useAuth from "../../hooks/useAuth";
import useProperties from "../../hooks/useProperties";

const BestPost = () => {
    const [user] = useAuth();
    const { recipe } = useProperties();

    return (
        <>
            <div >
                <div>
                    <h2>{recipe.name}</h2>
                    <div>
                        <p>{recipe.shortContent}</p>
                        <p>{recipe.longContent}</p>
                        <p>Kod rabatowy na mikser: </p>
                        {user
                            ?
                            <p>#KBCC123</p>
                            :
                            <p>Zaloguj</p>
                        }
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default BestPost;