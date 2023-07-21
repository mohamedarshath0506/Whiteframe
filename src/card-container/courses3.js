import { NavLink } from "react-router-dom";
import javascript from "../image/javascript.png"

function Courses3() {
    function myFunction() {
        let x = document.getElementById("demo");
        x.style.fontSize = "40px"; 
        x.style.padding = "20px"
        x.style.color = "white";
        x.style.backgroundColor = "gray"
      }
    return(
        <div className="html-item">
            <div>
                <img src={javascript} width={400} />
            </div>
            <div>
            <p id="demo" className="btn">Click the button to change the layout of this paragraph</p>
            <button onClick={myFunction}>Click Me!</button>
            </div>
        </div>
    )
}

export default Courses3