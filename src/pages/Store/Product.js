import React from "react"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { addItem } from "../../redux/actions"

import products from "../../contents/products/products.json"

import DefaultLayout from "../../layouts/DefaultLayout"

import "./Product.scss"

export default function Product() {
	let { id } = useParams()

	const product = products[Number(id) - 1]

	const dispatch = useDispatch()

	const handleAddToCard = () => {
		dispatch(addItem(product))
	}

	return (
		<div>
			<DefaultLayout>
				<Container className="mt-5 product-page text-center">
					<Card className="pb-2">
						<div className="card-body">
							<Card.Title className="fs-2 text-center my-3">
								{product.name}
							</Card.Title>
							<Row className="gx-4 row-cols-1">
								<Col>
									<div className="white-box text-center">
										<img
											alt=""
											src={product.image}
											className="img-responsive"
											style={{
												height: "70vh",
												width: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
								</Col>
								<Col>
									<h4 className="fs-4 box-title mt-5">Product description</h4>
									<p className="text-muted">{product.description}</p>
									<h2 className="my-4">
										{product.price.toLocaleString("en-US", {
											style: "currency",
											currency: "USD",
										})}
									</h2>
									<div className="position-relative product__wrap-btn">
										<Button
											className="d-flex align-center product__btn"
											onClick={handleAddToCard}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="22"
												height="22"
												fill="currentColor"
												className="bi bi-bag-plus m-2"
												viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
												/>
												<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
											</svg>
											<p className="m-2">Add To Card</p>
										</Button>
									</div>
									<h3 className="box-title mt-5">Key Highlights</h3>
									<ul className="list-unstyled">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-check2"
												viewBox="0 0 16 16">
												<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
											</svg>
											Sturdy structure
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-check2"
												viewBox="0 0 16 16">
												<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
											</svg>
											Designed to foster easy portability
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-check2"
												viewBox="0 0 16 16">
												<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
											</svg>
											Perfect furniture to flaunt your wonderful collectibles
										</li>
									</ul>
								</Col>
							</Row>
						</div>
					</Card>
				</Container>
			</DefaultLayout>
		</div>
	)
}
