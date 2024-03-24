import { Link } from "react-router-dom"

import './styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/Home" className="siteTitle">Refreshed Solar</Link>
            <ul>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Products">Products</CustomLink>
                <CustomLink to="/Testimonials">Testimonials</CustomLink> 
            </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}

export default Navbar