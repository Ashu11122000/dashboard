import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
    isActive
        ? "text-yellow-300 font-semibold"
        : "text-white hover:text-yellow-200";

    return (
        <nav className="bg-blue-600 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo / Project Name */}
                <h1 className="text-2xl font-bold text-white">React Practice</h1>

                {/* Navigation Links */}
                <ul className="flex items-center gap-6">
                    <li>
                        <NavLink to="/" className={navLinkStyle}>
                            Home
                        </NavLink>
                    </li>

                <li>
                    <NavLink to="/counter" className={navLinkStyle}>
                        Counter
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/form" className={navLinkStyle}>
                        Form
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/todo" className={navLinkStyle}>
                        Todo
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/debounce" className={navLinkStyle}>
                        Debounce
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/calculator" className={navLinkStyle}>
                        Calculator
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/weather" className={navLinkStyle}>
                        Weather
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;


