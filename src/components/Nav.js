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
		width: "70vw",
		maxWidth: "1000px",
		padding: "2rem",
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
		let tempCart = [...cart];
		for (const item in tempCart) {
			if (id === tempCart[item].id) {
				tempCart.splice(item, 1);
			}
		}
		setCart(tempCart);
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
					<h3 id="cart" onClick={openModal}>
						Cart: {getQuantity()}
					</h3>
				</Link>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Cart"
				style={modalStyles}
			>
				<div className="cart-header-container">
					<div id="cart-header">Shopping Cart:</div>
					<button id="header-btn" onClick={closeModal}>
						X
					</button>
				</div>
				<div className="cart-items">
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
								<button onClick={() => removeItem(item.id)}>x</button>
							</div>
						</div>
					))}
				</div>
				<div className="total">Total: ${getTotal().toFixed(2)}</div>
				<div className="checkout-btns">
					<button onClick={closeModal}>Continue Shopping</button>
					<Link to="/">
						<button onClick={checkout}>Checkout</button>
					</Link>
				</div>
			</Modal>
			{getQuantity() > 0 && (
				<button id="open-cart" onClick={openModal}>
					Cart ({getQuantity()})
				</button>
			)}
		</nav>
	);
}
export default Nav;
