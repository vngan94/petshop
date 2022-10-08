import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" exact={true}>Home</Link>
                <Link to="/dogs">Dogs</Link>
                <Link to="/mycart">Cart</Link>
            </nav>

        </>
    )
}
export default Navbar