import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import html from "../image/html.png"
import css from "../image/css.png"
import javascript from "../image/javascript.png"
import react from "../image/react-js.png"

function Courses() {

    return(
        <div>
            <div className="card-container">
                <div className="card-item">
                    <img src={html} width={100} />
                    <NavLink to="/courses/courses1" className="link btn">Html</NavLink>
                </div>

                <div className="card-item">
                    <img src={css} width={100} />
                    <NavLink to="/courses/courses2" className="link btn">Css</NavLink>
                </div>
                    
                <div className="card-item">
                    <img src={javascript} width={100} />
                    <NavLink to="/courses/courses3" className="link btn">Javascript</NavLink>
                </div>

                <div className="card-item">
                    <img src={react} width={100} />
                    <NavLink to="/courses/courses4" className="link btn">React</NavLink>
                </div>
            </div>
             <Outlet />
        </div>
    )
}

export default Courses