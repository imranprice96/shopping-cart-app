import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/profile" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
