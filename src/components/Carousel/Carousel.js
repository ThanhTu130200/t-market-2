import React from "react"

import { Carousel, Card, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

import products from "../../contents/products/products.json"

import "./Carousel.scss"

export default function CarouselComponent() {
	return (
		<div>
			<Carousel>
				{products.map((product) => (
					<Carousel.Item interval={3000} key={product.id}>
						<img
							className="d-block w-100"
							src={product.image}
							alt="Second slide"
							style={{ height: "100vh", objectFit: "cover" }}
						/>
						<Carousel.Caption>
							<Card className="text-black" style={{ height: "40vh" }}>
								<Card.ImgOverlay>
									<Card.Title className="fs-1">{product.name}</Card.Title>
									<Card.Text className="fs-4 color-primary">
										{product.price.toLocaleString("en-US", {
											style: "currency",
											currency: "USD",
										})}
									</Card.Text>
									<Card.Text className="fs-6">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Culpa, possimus temporibus reprehenderit molestiae,
										doloribus eos obcaecati expedita, voluptatibus commodi
										suscipit aliquid fuga modi alias fugiat nostrum. Accusantium
										incidunt quae modi
									</Card.Text>
									<LinkContainer to={`/store/product-${product.id}`}>
										<Button className="checkItOutBtn btn-primary fs-5">
											Check it out
										</Button>
									</LinkContainer>
								</Card.ImgOverlay>
							</Card>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	)
}
