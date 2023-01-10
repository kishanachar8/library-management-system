import '../styles/landingPage.css'
import { Link } from "react-router-dom"
const LandingPage =()=>{
    return(
        <div className="landingPage">
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <div>
                    <img src="/images/adminicon.png" alt="" />
                    <img src="/images/usericon.png" alt="" />
                </div>
                <div>
                <Link to='/admin-login' className="btn1">Admin Login</Link>
                <Link to='/user-login' className="btn2"> User Login</Link>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;