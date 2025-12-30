import { useContext } from "react";
import PropertiesContext from "../context/PropertiesContext";

const BestPost = () => {
    const bestRecepie = useContext(PropertiesContext)

    return (
        <>
            <div >
                <div>
                    <h2>{bestRecepie.recipe.name}</h2>
                    <div>
                        <p>{bestRecepie.recipe.shortContent}</p>
                        <p>{bestRecepie.recipe.longContent}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default BestPost;