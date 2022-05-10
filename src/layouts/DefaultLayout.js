import React from "react"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

export default function DefaultLayout({ children }) {
	return (
		<div>
			<Nav />
			{children}
			<Footer />
		</div>
	)
}
