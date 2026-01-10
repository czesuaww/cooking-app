import { useState } from "react";

const LastSearchPost = (props) => {
    const [desc, setDesc] = useState(false)

    const handleYes = () => setDesc(true);

    return (
        <div>
            {desc
                ?
                <div>
                    <button onClick={() => setDesc(false)}>Close</button>
                    <h1>Here's the recipe I searched for recently. Enjoy! ;p</h1>
                    <h2>{props.lastRec.name}</h2>
                    <p>{props.lastRec.shortContent}</p>
                    <p>{props.lastRec.longContent}</p>
                    <hr />
                </div>
                :
                <div>
                    <h1>You recently searched for this recipe: <br /> {props.lastRec.name} <br /> Do you want to see him again?</h1>
                    <button onClick={handleYes}>
                        Yes
                    </button>
                    <button onClick={props.onNo}>
                        No
                    </button>
                </div>
            }
        </div>
    )
}

export default LastSearchPost;