import useAuth from "../../hooks/useAuth";

const Post = (props) => {
    const user = useAuth();
    const { name, shortContent, longContent } = props;

    return (
        <>
            <div >
                <div>
                    <h2>{name}</h2>
                    <div>
                        <p>{shortContent}</p>
                        <p>{longContent}</p>
                        <p>Kod rabatowy na mikser: </p>
                        {user
                            ?
                            <p>#KBCC123</p>
                            :
                            <p>Log in</p>
                        }
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Post;