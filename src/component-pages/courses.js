import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Courses() {

    return(
        <div>
            <div className="card-container">
                <div className="card-item">
                    <NavLink to="/courses/courses1" className="link">Courses1</NavLink>
                </div>

                <div className="card-item">
                    <NavLink to="/courses/courses2" className="link">Courses2</NavLink>
                </div>
                    
                <div className="card-item">
                    <NavLink to="/courses/courses3" className="link">Courses3</NavLink>
                </div>

                <div className="card-item">
                    <NavLink to="/courses/courses4" className="link">Courses4</NavLink>
                </div>
            </div>
             <Outlet />
        </div>
    )
}

export default Courses