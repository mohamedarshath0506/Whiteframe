import { NavLink } from "react-router-dom"
import leftIcon from "../image/head.jpeg"

function Header() {
  
    return(
        <div>
            <div className="whiteframe-container">
                <div>
                    <h2 className="whiteframe"><img src={leftIcon} width={60}/>WhiteFrame</h2>
                </div>
                <nav>
                    <div className="items">
                        <NavLink to="/home" className="link home">Home</NavLink>
                        <NavLink to="/courses" className="link courses">Courses</NavLink>
                        <NavLink to="/admission" className="link admission">Admission</NavLink>
                        <NavLink to="/testimonial" className="link testimonial">Testimonial</NavLink>
                    </div>
                </nav>
                <div className="button-container">
                    <button className="login-button">Login</button>
                    <button className="signUp-button">Sign Up</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header