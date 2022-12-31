import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
	return (
		<nav className="navbar">
			<Link to="/">
				<h1>Home</h1>
			</Link>
			<Link to="shop">
				<h3>Shop</h3>
			</Link>
		</nav>
	);
}

export default Nav;
