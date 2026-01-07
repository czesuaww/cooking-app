import { useContext } from "react";
import PropertiesContext from "../context/PropertiesContext";
import useAuth from "../../hooks/useAuth";

const BestPost = () => {
    const bestRecepie = useContext(PropertiesContext)
    const [user] = useAuth();

    return (
        <>
            <div >
                <div>
                    <h2>{bestRecepie.recipe.name}</h2>
                    <div>
                        <p>{bestRecepie.recipe.shortContent}</p>
                        <p>{bestRecepie.recipe.longContent}</p>
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