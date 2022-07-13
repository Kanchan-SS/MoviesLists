// sfc=stateless function
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav-content">
            <h1>Bollywood movies</h1>
            <div>
                <Link to="/" id="home">Home</Link>
                <Link to="/addmovie" id="add">Add new movies</Link>
            </div>
        </div>
    );
}

export default Navbar;                                                      