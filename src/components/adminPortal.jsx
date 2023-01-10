import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./adminDashboard";
import UserList from "./userList";
import BookList from "./bookList";
import ReadBook from "./readBook";
import AddBook from "./addBook";
import AddUser from "./addUser";
const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;