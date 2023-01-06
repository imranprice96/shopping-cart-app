import { useEffect, useState } from "react";

function Item(props) {
	//const [item, setitem] = useState({ id: props.id, title: props.title, image: props.image });
	const [quantity, setQuantity] = useState(0);

	const increase = () => setQuantity((quantity) => quantity + 1);
	const decrease = () => {
		quantity > 0
			? setQuantity((quantity) => quantity - 1)
			: setQuantity(quantity);
	};

	return (
		<div key={props.id} className="item">
			<h3>{props.title}</h3>
			<img src={props.image} alt=""></img>

			<div>
				<h4>${props.price.toFixed(2)}</h4>
				<div className="item-buttons">
					<div className="quantity-container">
						<button onClick={increase}>+</button>
						<input
							type="number"
							id="quantity"
							name="quantity"
							onChange={(e) => setQuantity(e.target.value)}
							value={quantity}
						/>
						<button onClick={decrease}>-</button>
					</div>
					<div>
						<button id="add-btn">Add to Bag</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Item;
