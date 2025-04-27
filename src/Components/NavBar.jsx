import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imgSrc from "../assets/bb.png";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // import this at top of your file
import { FiLogOut } from "react-icons/fi";


const NavLinks = [
    { link: "/", text: "Home" },
    { link: "/blog", text: "Blog" },
    { link: "/about", text: "About Us" },
    { link: "/contact", text: "Contact Us" },
];

function NavBar() {
    const cartCount = useSelector((state) => state.carts.count);
    const navigate = useNavigate();

    function clearLocalStorage() {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            localStorage.clear();
            alert("Logout successfully!");
            navigate('/login');
        } else {
            alert("Action cancelled.");
        }
    }


    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-info border-bottom border-dark">
            <div className="container">

                {/* Logo */}
                <Link
                    to="/"
                    className="navbar-brand fw-bold fs-5 d-flex align-items-center justify-content-center border border-2 border-white rounded-circle p-2 shadow-sm hover-shadow-lg"
                    style={{
                        transition: 'all 0.3s ease', // Smooth transition for hover effect
                        width: '50px', // Adjust width for circular shape
                        height: '50px', // Adjust height for circular shape
                    }}
                >
                    <span className="text-danger">B</span>
                    <span className="text-white">.</span>
                    <span className="text-white">K</span>
                </Link>


                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links and buttons */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Navigation Links */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {NavLinks.map((link, index) => (
                            <li className="nav-item mx-2" key={index}>
                                <NavLink
                                    to={link.link}
                                    className="nav-link text-white fw-bold border-0 p-2 rounded shadow-sm"
                                    activeClassName="active-link" // Active page styling
                                    style={{
                                        transition: 'all 0.3s ease',
                                        borderRadius: '5px'
                                    }}
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side Buttons */}
                    <div className="d-flex align-items-center gap-3">
                        <Link
                            to="/login"
                            onClick={clearLocalStorage}
                            className="btn bg-danger border-3 text-white p-2 rounded hover-effect"
                        >
                            <FiLogOut size={22} />
                        </Link>

                        <Link
                            to="/login"
                            className="btn bg-success border-3 text-white p-2 rounded hover-effect"
                        >
                            <FaUser size={22} />
                        </Link>

                        <Link
                            to="/cart"
                            className="btn bg-warning border-3 text-white p-2 rounded position-relative hover-effect"
                        >
                            <FaShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                </div>
            </div>
        </nav>


    );
}

export default NavBar;
