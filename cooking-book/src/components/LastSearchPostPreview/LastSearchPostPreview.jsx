import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from '../LastSearchPostPreview/LastSearchPostPreview.module.css';
import useProperties from "../../hooks/useProperties";

const LastSearchPostPreview = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { allPosts } = useProperties();

    useEffect(() => {
        if (allPosts && allPosts.length > 0) {
            const foundPost = allPosts.find(x => String(x.id) === String(id));
            setPost(foundPost);
        }
    }, [id, allPosts])

    if (!post) return <h1 className={style.container}>Searching...</h1>;

    return (
        <div className={style.container}>
            <div className={style.glassCard}>
                <span className={style.badge}>Last viewed</span>
                <h1 className={style.mainTitle}>Enjoy your meal! ;p</h1>

                <div className={style.recipeDetail}>
                    <h2 className={style.title}>Title: <br /> {post.title}</h2>
                    <p className={style.description}>Description: <br />{post.description}</p>
                    <p className={style.ingredients}>Ingredients: <br />{post.ingredients}</p>
                </div>
            </div>
        </div>
    )
}

export default LastSearchPostPreview;