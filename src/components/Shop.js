import { useEffect, useState } from "react";
import "./Shop.css";

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
		<div>
			<h1>Shop</h1>
			<div className="store-items">
				{items.map((item) => (
					<div key={item.id} className="item">
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
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;
