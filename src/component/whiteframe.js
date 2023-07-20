import "./whiteframe.css"
import { Link } from "react-router-dom"
import whiteFrameMan from "../image/whiteFrameMan.png"
import rightIcon from "../image/right-icon.png"
import khanAcademy from "../image/khan-academy.png"
import internationalFundation from "../image/international-fundation.png"
import Header from "./header"


function WhiteFrame() {
    return (
        <div className="container">
            <div className="content">
                <div>
                    <div>
                        <h1 className="item-1">Empowering</h1>
                        <h1 className="item-2">Minds through</h1>
                        <h1 className="item-2">Edcation</h1>
                        <p className="global-content">Discover a world of knowledge and connect with a global community of learners.</p>
                        <div className="btn-container">
                            <button className="start-btn">Start Learning Today</button>
                            <button className="intro-btn"><img src={rightIcon} />See Our Intro</button>
                        </div>
                        <div className="skils-contnet">
                            <p className="trusted">Trusted by_</p>
                            <h2 className="skill">SKiLL SHare</h2>
                            <p className="academy"><img src={khanAcademy} />Khan Academy</p>
                            <p className="internationalFundation"><img src={internationalFundation}/>INTERNATIONAL FOUNDATION</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={whiteFrameMan} alt="whiteFrame" width={1130}/>
                </div>
            </div>
        </div>
    )
}

export default WhiteFrame