import { Link } from "react-router-dom";
const Notfound = () => {
    return ( 
        <div className="Not-found">
            <h1>404 : Page Not Found</h1>

            <h2>The page you are looking for is not present
                 in current application please go back to home page</h2>
                 <Link to="/">Go to Home </Link>
        </div>
     );
}
 
export default Notfound;