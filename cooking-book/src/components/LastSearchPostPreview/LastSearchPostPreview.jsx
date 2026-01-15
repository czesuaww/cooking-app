import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { initState } from "../../reducer";
import style from '../LastSearchPostPreview/LastSearchPostPreview.module.css';

const LastSearchPostPreview = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = initState.poststsAll.find(x => x.id === Number(id));
        setTimeout(() => {
            setPost(foundPost);
        }, 1000)
    }, [id])

    if (!post) return <h1 className={style.container}>Searching...</h1>;

    return (
        <div className={style.container}>
            <h1>Here's the recipe you searched for recently. Enjoy! ;p</h1>
            <h2>{post.name}</h2>
            <p>{post.shortContent}</p>
            <p>{post.longContent}</p>
        </div>
    )
}

export default LastSearchPostPreview;