import React from "react"
import { Container, Row } from "react-bootstrap"

import Product from "../Product/Product"

export default function Products({ products, row }) {
	return (
		<section className="py-5">
			<Container className="px-4 px-lg-5 mt-5">
				<Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 justify-center">
					{products.map((product) => (
						<Product key={product.id} product={product} row={row} />
					))}
				</Row>
			</Container>
		</section>
	)
}
