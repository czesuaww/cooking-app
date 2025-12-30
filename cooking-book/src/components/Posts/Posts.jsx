import Post from "../Post/Post";

const Posts = (props) => {
    return (
        <>
            {props.posts.length > 0 ? (
                <div className="posts-list">
                    {props.posts.map(post => (
                        <Post key={post.id} {...post} />
                    ))}
                </div>
            ) :
                <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                    <h1>Nie znaleziono przepisów</h1>
                    <p>Spróbuj wpisać inną nazwę dania</p>
                </div>
            }
            {console.log(props.children, 'children')}
        </>
    );
};

export default Posts;