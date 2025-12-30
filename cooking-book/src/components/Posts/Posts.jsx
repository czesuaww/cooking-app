import { useContext } from "react";
import Post from "../Post/Post";
import PropertiesContext from "../context/PropertiesContext";

const Posts = () => {
    const recepies = useContext(PropertiesContext);

    return (
        <>
            {recepies.posts.length > 0 ? (
                <div className="posts-list">
                    {recepies.posts.map(post => (
                        <Post key={post.id} {...post} />
                    ))}
                </div>
            ) :
                <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                    <h1>Nie znaleziono przepisów</h1>
                    <p>Spróbuj wpisać inną nazwę dania</p>
                </div>
            }
        </>
    );
};

export default Posts;