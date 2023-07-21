import { NavLink } from "react-router-dom";
import html from "../image/html.png"

function Courses1() {
    return(
        <div className="html-item">
            <div>
                <img src={html} width={400} />
            </div>
            <div>
                <h1>HTML is the standard markup language for Web pages.</h1>
                <h2>With HTML you can create your own Website.</h2>
                <h3>HTML is easy to learn - You will enjoy it!</h3>
                <p>This is a paragraph.</p>
            </div>
        </div>
    )
}

export default Courses1;