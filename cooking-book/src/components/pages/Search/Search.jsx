import { useEffect, useState } from "react";
import { postsPL } from "../../../reducer";
import Post from "../../Post/Post";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import { useSearchParams } from "react-router";
import style from '../Search/Search.module.css';

const Search = () => {
    useWebsiteTitle('Searched result')
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('fraze')

    useEffect(() => {
        setTimeout(() => {
            const filteredPosts = postsPL.filter(post => post.name.toLowerCase().includes(query.toLowerCase()));
            if (query) {
                setLoading(true);
                setPosts(filteredPosts);
                setLoading(false);
            }
        }, 1500);
    }, [query])

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