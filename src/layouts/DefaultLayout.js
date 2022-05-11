import React from "react"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

import "./DefaultLayout.scss"

export default function DefaultLayout({ children }) {
	return (
		<div className="defaultLayout">
			<Nav />
			{children}
			<Footer />
		</div>
	)
}
