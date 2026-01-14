import Post from "../Post/Post";
import useProperties from "../../hooks/useProperties";

const Posts = () => {
    const { allPosts } = useProperties();
    return (
        <>
            {allPosts.length > 0 ? (
                <div className="posts-list">
                    {allPosts.map(post => (
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