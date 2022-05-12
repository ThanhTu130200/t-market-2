import DefaultLayout from "../layouts/DefaultLayout"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { increaseItem, decreaseItem, removeItem } from "../redux/actions"

export default function Cart() {
	const cart = useSelector((state) => state.cart)
	const dispatch = useDispatch()

	let summary = cart.reduce((acc, item) => (acc += item.price * item.quantity), 0)

	const handleMinus = (item) => {
		dispatch(decreaseItem(item))
	}

	const handlePlus = (item) => {
		dispatch(increaseItem(item))
	}

	const handleDelete = (item) => {
		dispatch(removeItem(item))
	}

	return (
		<>
			<DefaultLayout>
				<section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
					<Container className="py-5 h-100">
						<Row className="d-flex row-cols-1 justify-content-center align-items-center h-100">
							{cart.length >= 1 ? (
								<Col>
									<Card
										className="card-registration card-registration-2"
										style={{ borderRadius: "15px" }}>
										<Card.Body className="p-0">
											<Row className="g-0">
												<Col lg="8">
													<div className="p-5">
														<div className="d-flex justify-content-between align-items-center mb-5">
															<h1 className="fw-bold mb-0 text-black">
																Shopping Cart
															</h1>
															<h6 className="mb-0 text-muted">
																{cart.length}{" "}
																{cart.lenght === 1
																	? "item"
																	: "items"}
															</h6>
														</div>

														<hr className="my-4"></hr>

														{cart.map((item) => (
															<div
																key={item.id}
																className="row mb-4 d-flex justify-content-between align-items-center">
																<div className="col-md-2 col-lg-2 col-xl-2">
																	<img
																		className="img-fluid rounded-3"
																		src={item.image}
																		alt={item.name}
																	/>
																</div>
																<div className="col-md-3 col-lg-3 col-xl-3">
																	<h6 className="text-muted">
																		{item.tags[0]}
																	</h6>
																	<h6 className="text-black mb-0">
																		{item.name}
																	</h6>
																</div>
																<div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
																	{/* minus button */}
																	<button
																		className="btn btn-link px-2"
																		onClick={() =>
																			handleMinus(item)
																		}>
																		<svg
																			className="bi bi-dash"
																			xmlns="http://www.w3.org/2000/svg"
																			width="16"
																			height="16"
																			fill="currentColor"
																			viewBox="0 0 16 16">
																			<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																		</svg>
																	</button>

																	<Card.Text className="m-0">
																		{item.quantity}
																	</Card.Text>

																	{/* plus button */}
																	<button
																		className="btn btn-link px-2"
																		onClick={() =>
																			handlePlus(item)
																		}>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width="16"
																			height="16"
																			fill="currentColor"
																			className="bi bi-plus"
																			viewBox="0 0 16 16">
																			<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																		</svg>
																	</button>
																</div>
																<Col className="col-md-3 col-lg-2 col-xl-2">
																	<h6
																		className="mb-0"
																		style={{
																			minWidth: "85px",
																		}}>
																		{item.price.toLocaleString(
																			"en-US",
																			{
																				style: "currency",
																				currency: "USD",
																			}
																		)}
																	</h6>
																</Col>
																<div
																	className="col-md-1 col-lg-1 col-xl-1 text-center text-muted cursor-pointer"
																	onClick={() =>
																		handleDelete(item)
																	}>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="16"
																		height="16"
																		fill="currentColor"
																		className="bi bi-trash3"
																		viewBox="0 0 16 16">
																		<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
																	</svg>
																</div>
															</div>
														))}
													</div>
												</Col>

												<Col lg="4 bg-grey">
													<div className="p-5">
														<h3 className="fw-bold mb-5 mt-2 pt-1">
															Summary
														</h3>
														<hr className="my-4"></hr>

														<div className="d-flex justify-content-between mb-4">
															<h5 className="text-uppercase">
																items: {cart.length}
															</h5>
															<h5>
																{summary.toLocaleString("en-US", {
																	style: "currency",
																	currency: "USD",
																})}
															</h5>
														</div>
														<h5 className="text-uppercase mb-3">
															Shipping
														</h5>

														<div className="mb-4 pb-2">
															<select className="select">
																<option value="1">
																	Standard Delivery - $5.00
																</option>
																<option value="2">
																	Fast Delivery - $5.00
																</option>
															</select>
														</div>

														<h5 className="text-uppercase mb-3">
															Give code
														</h5>

														<div className="mb-5">
															<div className="form-outline">
																<input
																	type="text"
																	id="form3Examplea2"
																	className="form-control form-control-lg"
																/>
																<label
																	className="form-label"
																	htmlFor="form3Examplea2">
																	Enter your code
																</label>
															</div>
														</div>
														<hr className="my-4"></hr>

														<div className="d-flex justify-content-between mb-5">
															<h5 className="text-uppercase">
																Total price
															</h5>
															<h5>
																{(summary + 5).toLocaleString(
																	"en-US",
																	{
																		style: "currency",
																		currency: "USD",
																	}
																)}
															</h5>
														</div>

														<button
															type="button"
															className="btn btn-dark btn-block btn-lg"
															data-mdb-ripple-color="dark">
															Register
														</button>
													</div>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								</Col>
							) : (
								<>
									<p className="text-center fs-5 m-0 pb-4 pt-5 text-muted fw-light">
										No items just yet. Keep shopping
									</p>
									<LinkContainer
										to="/store"
										style={{ maxWidth: "200px", padding: "18px" }}
										className="text-center">
										<Button className="fs-6 mb-4 mt-5" variant="secondary">
											GO TO STORE
										</Button>
									</LinkContainer>
								</>
							)}
						</Row>
					</Container>
				</section>
			</DefaultLayout>
		</>
	)
}
