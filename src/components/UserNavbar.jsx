import { Link } from "react-router-dom";
import '../styles/userNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <h1>User Portal</h1>
            <Link to="/user/">DashBoard</Link>
            <Link to="/user/book-list/*">Book List</Link>
            <Link to="/">Logout</Link>
        </div>
     );
}
 
export default UserNavbar;