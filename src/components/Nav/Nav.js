import React from "react"
import { Navbar, Nav, Container, Badge } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from "react-redux"

import "./Nav.scss"

export default function NavComponent() {
	const cart = useSelector((state) => state.cart)

	return (
		<Navbar bg="light" expand="lg" className="position-fixed">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand as="h1" to="/" href="/" className="nav__header fs-2">
						t-Market
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll" className="nav__collapse">
					<Nav className=" my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
						<LinkContainer to="/store">
							<Nav.Link>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									fill="currentColor"
									className="bi bi-shop"
									viewBox="0 0 16 16">
									<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
								</svg>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/cart" className="position-relative">
							<Nav.Link>
								<svg
									className="bi bi-cart"
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									fill="currentColor"
									viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
								</svg>
								<Badge pill bg="secondary" className="nav__cart--badge bg-primary">
									{cart.length}
								</Badge>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about" className="mt-1 fs-6 nav__aboutUs">
							<Nav.Link>About Us</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
