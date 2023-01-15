import { Link } from "react-router-dom";
import "./Nav.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const modalStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

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

	const getTotal = () => {
		let total = 0;
		for (const item in cart) {
			total = total + cart[item].total;
		}
		return total;
	};

	const removeItem = (id) => {
		//console.log(id);
		let tempCart = [...cart];
		tempCart.splice(id, 1);
		//console.log(tempCart);
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
				contentLabel="Cart"
				style={modalStyles}
			>
				<div>
					{cart.map((item) => (
						<div key={item.id} className="cart-container">
							<div className="cart-image">
								<img
									src={item.image}
									width="60px"
									height="60px"
									alt=""
								></img>
							</div>
							<div className="cart-title">{item.title}</div>
							<div className="cart-info">
								<div>Qty: {item.quantity}</div>
								<div>NZD ${item.price.toFixed(2)}</div>
							</div>
							<div className="cart-btn">
								<button onClick={removeItem(item.id)}>x</button>
							</div>
						</div>
					))}
					<div>Total: ${getTotal().toFixed(2)}</div>
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
