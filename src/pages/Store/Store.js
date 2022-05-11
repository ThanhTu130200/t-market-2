import React from "react"

import DefaultLayout from "../../layouts/DefaultLayout"
import Products from "../../components/Products/Products"

import products from "../../contents/products/products.json"

export default function Store() {
	return (
		<div>
			<DefaultLayout>
				<h1 className="fs-2 mt-5 text-center">Store</h1>
				<Products products={products} />
			</DefaultLayout>
		</div>
	)
}
