import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from '../LastSearchPostPreview/LastSearchPostPreview.module.css';
import objectToArrayWithId from "../../lib/objects";
import axios from "../../axios";

const LastSearchPostPreview = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('/recepies.json');
                const foundPost = objectToArrayWithId(res.data)
                    .find(x => String(x.id) === String(id));
                setPost(foundPost);
            } catch (err) {
                console.error("WRONG SEARCH: ", err)
            }
        }
        getData();
    }, [id])


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