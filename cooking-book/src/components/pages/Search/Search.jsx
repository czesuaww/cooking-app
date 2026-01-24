import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import { useSearchParams } from "react-router";
import style from '../Search/Search.module.css';
import axios from "../../../axios";
import objectToArrayWithId from "../../../lib/objects";

const Search = () => {
    useWebsiteTitle('Searched result')
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('fraze')

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/recepies.json');
                const filteredPosts = objectToArrayWithId(res.data)
                    .filter(post => post.title.toLowerCase()
                        .includes(query.toLowerCase()));

                setPosts(filteredPosts);
                setLoading(false);
            } catch (err) {
                console.error("WRONG SEARCH: ", err)
            }
        }
        getData();
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