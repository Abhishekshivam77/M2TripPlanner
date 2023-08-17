import style from "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    return <>
        <nav className="navbar">
            <Link to="/post"><p> Post Data </p></Link>
            <Link to="/retrieve"><p> Retrieve Data </p></Link>
        </nav>
    </>
}

export default Navbar;