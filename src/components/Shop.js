import { useEffect, useState } from "react";
import "./Shop.css";
import Item from "./item";

function Shop() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch("https://fakestoreapi.com/products?limit=12");
		const items = await data.json();
		console.log(items);
		setItems(items);
	};

	return (
		<div className="shop-container">
			<h1>Shop</h1>
			<div className="store-items">
				{items.map((item) => (
					// ------------------------------------------ //
					// ADD ALL THIS LOGIC INTO A SEPARATE COMPONENT
					/*<div key={item.id} className="item">
						<h3>{item.title}</h3>
						<img src={item.image} alt=""></img>
						<div>
							<button>+</button>
							<input
								type="number"
								id="quantity"
								name="quantity"
								min={1}
							/>
							<button>-</button>
						</div>
					</div>*/
					<Item
						key={item.id}
						id={item.id}
						title={item.title}
						image={item.image}
					/>
					// ------------------------------------------ //
				))}
			</div>
		</div>
	);
}

export default Shop;
