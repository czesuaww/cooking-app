import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { initState } from "../../reducer";

const LastSearchPostPreview = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = initState.poststsAll.find(x => x.id === Number(id));
        console.log(foundPost)
        setTimeout(() => {
            setPost(foundPost);
        }, 1000)
    }, [id])

    if (!post) return <h1>Searching...</h1>;

    return (
        <>
            <h1>Here's the recipe you searched for recently. Enjoy! ;p</h1>
            <h2>{post.name}</h2>
            <p>{post.shortContent}</p>
            <p>{post.longContent}</p>

        </>
    )
}

export default LastSearchPostPreview;