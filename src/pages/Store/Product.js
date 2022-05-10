import React from "react"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col, Button } from "react-bootstrap"

import products from "../../contents/products/products.json"

import DefaultLayout from "../../layouts/DefaultLayout"

export default function Product() {
	let { id } = useParams()
	const product = products[Number(id) - 1]
	return (
		<div>
			<DefaultLayout>
				<Container className="mt-5">
					<Card>
						<div className="card-body">
							<Card.Title className="fs-3">{product.name}</Card.Title>
							<Card.Text className="fs-5 color-primary">
								{product.price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</Card.Text>
							<Row>
								<Col className="lg-5 md-5 sm-6">
									<div className="white-box text-center">
										<img
											src="https://via.placeholder.com/430x600/00CED1/000000"
											className="img-responsive"
										/>
									</div>
								</Col>
								<Col className="lg-7 md-7 sm-6">
									<h4 className="box-title mt-5">Product description</h4>
									<p>{product.description}</p>
									<h2 className="mt-5">
										{product.price.toLocaleString("en-US", {
											style: "currency",
											currency: "USD",
										})}
									</h2>
									<Button className="d-flex align-center">
										<svg
											className="m-2"
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											fill="currentColor"
											class="bi bi-bag-plus"
											viewBox="0 0 16 16">
											<path
												fill-rule="evenodd"
												d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
											/>
											<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
										</svg>
										<p className="m-2">Add To Card</p>
									</Button>
									<h3 className="box-title mt-5">Key Highlights</h3>
									<ul className="list-unstyled">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-check2"
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
												class="bi bi-check2"
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
												class="bi bi-check2"
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
