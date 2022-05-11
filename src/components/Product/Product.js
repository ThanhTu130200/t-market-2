import React from "react"
import { Col, Card, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"

import { addItem } from "../../redux/actions"

import "./Product.scss"

export default function Product({ product, row }) {
	const { id, name, price, description, image } = product
	const dispatch = useDispatch()

	const handleAddToCard = () => {
		dispatch(addItem(product))
	}
	return (
		<Col className="mb-5 product-component">
			<Card className="h-100">
				<LinkContainer to={`/store/product-${id}`}>
					<div className="product__cartImgAnBody cursor-pointer">
						<Card.Img variant="top" src={image} className="product__img" />
						<Card.Body className="p-4 text-center">
							<Card.Title className="fs-5 fw-bolder">{name}</Card.Title>
							<Card.Text className="color-primary">
								{price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</Card.Text>
							<Card.Text
								className={`product__description ${
									row === 2 && "product__description--2rows"
								}`}>
								{description}
							</Card.Text>
						</Card.Body>
					</div>
				</LinkContainer>
				<Card.Footer className="p-4 pt-0 border-top-0 bg-transparent text-center">
					<Button onClick={handleAddToCard} className="product__btn">
						Add To Cart
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	)
}
