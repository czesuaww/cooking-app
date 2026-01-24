import useAuth from "../../hooks/useAuth";
import style from '../Post/Post.module.css'

const Post = (props) => {
    const { title, description, ingredients } = props;

    return (
        <div className={style.postCard}>
            <h2 className={style.title}>{title}</h2>

            <div className={style.content}>
                <p className={style.description}>{description}</p>

                {ingredients && (
                    <div className={style.ingredientsSection}>
                        <span className={style.label}>Ingredients:</span>
                        <p className={style.ingredientsText}>{ingredients}</p>
                    </div>
                )}
            </div>
            <hr className={style.divider} />
        </div>
    );
};

export default Post;