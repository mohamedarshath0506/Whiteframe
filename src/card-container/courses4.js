import { NavLink } from "react-router-dom";
import react from "../image/react-js.png"

function Courses4() {
    return(
        <div className="html-item">
            <div>
                <img src={react} width={300} />
            </div>
            <div>
                <h1>React is a JavaScript library for building user interfaces.</h1>
                <h1>React is used to build single-page applications.</h1>
                <h1>React allows us to create reusable UI components.</h1>
            </div>
        </div>
    )
}

export default Courses4