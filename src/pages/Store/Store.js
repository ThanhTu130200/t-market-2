import React from "react"

import DefaultLayout from "../../layouts/DefaultLayout"
import Products from "../../components/Products/Products"

import products from "../../contents/products/products.json"

export default function Store() {
	return (
		<div>
			<DefaultLayout>
				<h1 className="fs-2 text-center" style={{ marginTop: "150px" }}>
					STORE
				</h1>
				<Products products={products} />
			</DefaultLayout>
		</div>
	)
}
