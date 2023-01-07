import { useEffect, useState } from "react";
import "./Shop.css";
import Item from "./item";

function Shop(props) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const { cart, setCart } = props;

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		setLoading(true);
		const data = await fetch("https://fakestoreapi.com/products?limit=12");
		const items = await data.json();
		//console.log(items);
		setItems(items);
		setLoading(false);
	};

	if (loading) {
		return (
			<div className="shop-container">
				<h1>Loading Products...</h1>
			</div>
		);
	}

	return (
		<div className="shop-container">
			<div className="container">
				<h1 id="title">Shop | Cart:{cart.length}</h1>
				<div className="store-items">
					{items.map((item) => (
						<Item
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							cart={cart}
							setCart={setCart}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

//TODO
/*
	Shopping Cart Array
	Refresh app on checkout
	Add to bag function
		- quantity
		- price
		- running total
	Add some cool stuff to home page
	Pass array down to children?
*/

export default Shop;
