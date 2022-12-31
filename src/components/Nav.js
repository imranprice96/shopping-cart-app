import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
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
