import BestPost from "../BestPost/BestPost";
import Searchbar from "../Searchbar/Searchbar";
import Posts from "../Posts/Posts";

const Home = ({ theme, state }) => {
    return (
        <>
            <BestPost />
            <Searchbar />
            {state.posts.length > 0
                ?
                <Posts />
                :
                <div className="empty-state">
                    <h2 style={{ color: theme.color, background: theme.background }}>🔍Enter the name of the dish</h2>
                    <p style={{ color: theme.color, background: theme.background }}>We'll find the best recipes for you!</p>
                </div>
            }
        </>

    )
}

export default Home;