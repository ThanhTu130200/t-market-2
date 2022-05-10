import React, { useState } from "react"

import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap"

import "./Newsletter.scss"

export default function Newsletter() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = (e) => {
		e.preventDefault()
		setShow(true)
	}
	return (
		<div className="newsletter">
			<Container className="newsletter__container bg-primary text-white">
				<Row className="justify-content-md-center">
					<Col className="col-md-8">
						<Form onSubmit={(e) => handleShow(e)} className="text-center">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label className="fs-3">Email address</Form.Label>
								<p>Subscribe to receive discounts & more!</p>
								<Form.Control
									className="formInput"
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>
							<Button
								className="formSubmit border border-white"
								variant="primary"
								type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Thank you for subscribing</Modal.Title>
				</Modal.Header>
				<Modal.Body>You will be notified when we have a deal or items on sale</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
