import React from "react"

import DefaultLayout from "../layouts/DefaultLayout"
import Carousel from "../components/Carousel/Carousel"
import Newsletter from "../components/Newsletter/Newsletter"

export default function Home() {
	return (
		<div>
			<DefaultLayout>
				<Carousel />
				<Newsletter />
			</DefaultLayout>
		</div>
	)
}
