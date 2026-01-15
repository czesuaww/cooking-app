import { Link } from 'react-router';

const LastSearchPostMain = (props) => {
    return (
        <div>
            <h1>You recently searched for this recipe: <br /> {props.lastRec.name} <br /> Do you want to see him again?</h1>
            <Link to={`/last-recepie/${props.lastRec.id}`}>Tak</Link>
            <button onClick={props.onNo}>
                No
            </button>
        </div>
    )
}

export default LastSearchPostMain;