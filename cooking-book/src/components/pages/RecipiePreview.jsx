import { useParams } from "react-router";

const RecipiePreview = () => {
    const { id } = useParams()
    return (
        <>
            <h1>Recipie {id}</h1>
        </>
    )
}

export default RecipiePreview;