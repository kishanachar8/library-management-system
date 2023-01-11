import {Routes,Route} from 'react-router-dom'
import UserDashboard from './userDashboard';
import UserNavbar from './UserNavbar';
import BookList from  './bookList';
import ReadBook from './readBook';
const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route path='/' element={<UserDashboard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
     );
}
export default UserPortal;