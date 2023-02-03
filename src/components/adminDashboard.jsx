import '../styles/adminDashboard.css'
// const AdminDashboard = () => {
//     return ( 
//         <div className="adminDashboard">
//             {/* <h1>Welcome to Admin Home</h1> */}
//         </div>
//     );
// }
// export default AdminDashboard;

// import '../styles/adminDashboard.css';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    return (
        <div className="mainadmin">
            <div className="dashimg">

                <div className="admin_Dashboard">
                    <h1>Welcome to AdminDashboard</h1>
                </div>
                <div className="frameimg">
                    <img width="800px" height="300px" src="/images/img123.png" alt="" />
                    <div className="bookinfo">
                        <div className="bookinfolist">
                            <h2>Library to Host an Evening of Boardway Cabaret.. </h2>
                            
                            <p>By Erika Berlin on January 12, 2023 <br />
                                <b>The Friends of Greenwich Library are pleased to <br />
                                    host a special night of cabaret-style <br />
                                    performances with How I Got to…</b></p>

                            <div className="bookinfolink">
                                <Link to="">Take a Look</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="mainadmin1">
            <div className="step1">
                <img width="800px" height="300px" src="/images/img123.png" alt="" />
            </div>
            <div className="bookinfo1">
                <div className="bookinfolist1">
                <h2>At the Library this January... </h2>
                
                <p>By Erika Berlin on December 29, 2022 <br />
                <b>Greenwich Library has a full schedule of (free!) enrichment events <br />
                    throughout January. Speak with a librarian or check the online…</b></p>
                </div>

                <div className="bookinfolink1">
                <Link to="">Take a Look</Link>
                </div>
            </div>
            </div>

            <div className="mainadmin2">
                <div className="step2">
                <img width="800px" height="300px" src="/images/img123.png" alt="" />
                </div>
                <div className="bookinfo2">
                    <div className="bookinfolist2">
                    <h2>Signature Series: In the News with Fareed Zakaria</h2>
                
                
                <p> By Erika Berlin on January 11, 2023<br />
                <b>Greenwich Library’s Signature Series is pleased to welcome <br />
                    bestselling author and journalist Fareed Zakaria to the Library’s <br />
                    Berkley Theater on Thursday,…</b></p>

                    </div>
                    <div className="bookinfolink2">
                <Link to="">Take a Look</Link>
                </div>
                    
                </div>
            </div>
        </div>





    )
}
export default AdminDashboard;