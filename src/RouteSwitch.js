import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import { useState } from "react";

const RouteSwitch = () => {
	const [cart, setCart] = useState([]);
	return (
		<BrowserRouter>
			<Nav cart={cart} setCart={setCart} />
			<Routes>
				<Route path="/" element={<App />} />
				<Route
					path="/shop"
					element={<Shop cart={cart} setCart={setCart} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

//Image by Leonhard Niederwimmer - Pixabay
export default RouteSwitch;
