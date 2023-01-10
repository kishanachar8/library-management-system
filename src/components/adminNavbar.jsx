import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <h1>Admin Portal</h1>
            <Link to="/admin/">DashBoard</Link>
            <Link to="/admin/add-book">Add Books</Link>
            <Link to="/admin/add-user">Add User</Link>
            <Link to="/admin/book-list">Book List</Link>
            <Link to="/admin/user-list">User list</Link>
            <Link to="/">Logout</Link>
        </div>
    );
}
export default AdminNavbar;