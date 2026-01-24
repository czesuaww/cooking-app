import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import { useSearchParams } from "react-router";
import style from '../Search/Search.module.css';
import useProperties from "../../../hooks/useProperties";

const Search = () => {
    useWebsiteTitle('Searched result')
    const { allPosts } = useProperties();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('fraze')

    useEffect(() => {
        setTimeout(() => {
            const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
            if (query) {
                setLoading(true);
                setPosts(filteredPosts);
                setLoading(false);
            }
        }, 1500);
    }, [query, allPosts])

    if (loading) return <h1 className={style.container}>Loading...</h1>

    return (
        <div className={style.container}>
            <h1>Search result: {query}</h1>
            {posts.length > 0
                ?
                (
                    <>
                        {posts.map(post => (
                            <Post key={post.id} {...post} />
                        ))
                        }
                    </>
                ) :
                <div className={style.errorRecepie}>
                    <h1>No recipes found</h1>
                    <p>Try entering a different dish name</p>
                </div>
            }

        </div>
    )
}

export default Search;