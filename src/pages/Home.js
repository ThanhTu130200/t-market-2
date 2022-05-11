import React from "react"

import DefaultLayout from "../layouts/DefaultLayout"
import Carousel from "../components/Carousel/Carousel"
import Newsletter from "../components/Newsletter/Newsletter"
import Products from "../components/Products/Products"

import products from "../contents/products/products.json"

export default function Home() {
	const newProduct = products.slice(0, 3)

	return (
		<div>
			<DefaultLayout>
				<Carousel />
				<Products products={newProduct} row={2} />
				<Newsletter />
			</DefaultLayout>
		</div>
	)
}
