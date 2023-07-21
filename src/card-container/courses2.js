import { NavLink } from "react-router-dom";
import css from "../image/css.png"

function Courses2() {
    return(
        <div className="html-item">
            <div>
                <img src={css} width={400} />
            </div>
            <div>           
                <h1 className="css-model">My First CSS Example</h1>
                <p className="css-model">This is a paragraph.</p>
            </div>
        </div>
    )
}

export default Courses2