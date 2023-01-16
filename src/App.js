import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className="content">
				<div id="app-title">Store That Sells Stuff</div>
				<div id="app-subtitle">Shipping World Wide</div>
				<Link to="/shopping-cart-app/shop">
					<button id="app-btn">Shop now</button>
				</Link>
			</div>
		</div>
	);
}

export default App;
