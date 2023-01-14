import { useEffect, useState } from "react";

function Item(props) {
	//const [item, setitem] = useState({ id: props.id, title: props.title, image: props.image });
	const [quantity, setQuantity] = useState(0);
	const { cart, setCart } = props;
	const [item, setItem] = useState({
		id: props.id,
		title: props.title,
		price: props.price,
		image: props.image,
	});

	const increase = () => {
		setQuantity((quantity) => quantity + 1);
	};
	const decrease = () => {
		quantity > 0
			? setQuantity((quantity) => quantity - 1)
			: setQuantity(quantity);
	};

	const addToBag = () => {
		if (quantity > 0) {
			if (checkItemInCart()) {
				addQuantityToCart();
			} else {
				const newItem = {
					...item,
					quantity: quantity,
					total: item.price * quantity,
				};
				setCart((cart) => [...cart, newItem]);
			}

			setQuantity(0);
		}
	};

	const addQuantityToCart = () => {
		let itemsCopy = [...cart];
		for (const i in itemsCopy) {
			if (itemsCopy[i].id === item.id) {
				let newItem = {
					...itemsCopy[i],
					quantity: quantity + itemsCopy[i].quantity,
				};
				itemsCopy[i] = newItem;
				setCart(itemsCopy);
			}
		}
	};

	const checkItemInCart = () => {
		for (const i in cart) {
			if (cart[i].id === item.id) return true;
		}
		return false;
	};

	useEffect(() => {
		//console.log(quantity);
	}, [quantity]);

	return (
		<div key={item.id} className="item">
			<h3>{item.title}</h3>
			<img src={item.image} alt=""></img>

			<div>
				<h4>${item.price.toFixed(2)}</h4>
				<div className="item-buttons">
					<div className="quantity-container">
						<button onClick={increase}>+</button>
						<input
							type="number"
							id={`${item.id}-in`}
							name="quantity"
							onChange={(e) => setQuantity(e.target.value)}
							value={quantity}
						/>
						<button onClick={decrease}>-</button>
					</div>
					<div>
						<button id="add-btn" onClick={addToBag}>
							Add to Bag
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Item;
