const Post = (props) => {
    const { name, shortContent, longContent } = props
    return (
        <>
            <div >
                <div>
                    <h2>{name}</h2>
                    <div>
                        <p>{shortContent}</p>
                        <p>{longContent}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Post;