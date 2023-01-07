import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
	const { cart, setCart } = props;
	return (
		<nav className="navbar">
			<Link to="/">
				<h1>Home</h1>
			</Link>
			<div className="nav-end">
				<Link to="shop">
					<h3>Shop</h3>
				</Link>
				<Link>
					<h3>Cart: {cart.length}</h3>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
