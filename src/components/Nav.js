import { Link } from "react-router-dom";
import "./Nav.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

function Nav(props) {
	const { cart, setCart } = props;
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const checkout = () => {
		setCart([]);
		closeModal();
	};

	const getQuantity = () => {
		//console.log(cart);
		let count = 0;
		for (const item in cart) {
			count = count + cart[item].quantity;
		}
		return count;
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
					<h3 onClick={openModal}>Cart: {getQuantity()}</h3>
				</Link>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example"
			>
				<div>
					{cart.map((item) => (
						<p key={item.id}>
							<img src={item.image} width="60px" height="60px"></img>
							{item.title} | ${item.price} x {item.quantity} : $
							{item.total}
							<button>remove</button>
						</p>
					))}
					<div>Total:</div>
				</div>
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
