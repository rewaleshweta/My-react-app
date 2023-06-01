import "./landing.css"
import { NavLink } from "react-router-dom"
const Landing=()=>{
   return(
   <div className="landingpage">
    <div className="welcome">
        <h1>welcome to 10x instaclone</h1>
        <NavLink to="/allpost"> <button>Enter</button></NavLink>
       
    </div>
    <div className="welcomeimage">
        <img height="100%" width="100%" src="https://64.media.tumblr.com/ac0f24c9a59a44e044d38f6f8286cae5/tumblr_nsplpeRHEF1u7zdgco1_1280.jpg" alt="" />
    </div>
   </div>
   )
}
export default Landing
//lens-1418954@2x.png