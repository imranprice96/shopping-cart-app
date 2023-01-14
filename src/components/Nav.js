import { Link } from "react-router-dom";
import "./Nav.css";
import Modal from "react-modal";
import { useState } from "react";

function Nav(props) {
	let subtitle;
	const { cart, setCart } = props;
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const afterOpenModal = () => {
		subtitle.style.color = "blue";
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const checkout = () => {
		setCart([]);
		closeModal();
	};

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
					<h3 onClick={openModal}>Cart: {cart.length}</h3>
				</Link>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Example"
			>
				<div>
					<Link to="/">
						<button onClick={checkout}>Checkout</button>
					</Link>
					<button onClick={closeModal}>Continue Shopping</button>
				</div>
			</Modal>
		</nav>
	);
}

export default Nav;
