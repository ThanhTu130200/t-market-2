import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store/Store"
import Product from "./pages/Store/Product"
import Cart from "./pages/Cart"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./assets/main.css"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="store" element={<Store />} />
				<Route path="cart" element={<Cart />} />
				<Route path="/store/product-:id" element={<Product />} />
			</Routes>
		</div>
	)
}

export default App
