import { NavLink } from "react-router-dom"

function Home() {
    return(
        <div className="container">
            <h1>Arshath</h1>
            <NavLink to="/" className="link">Back</NavLink>
        </div>
    )
}

export default Home