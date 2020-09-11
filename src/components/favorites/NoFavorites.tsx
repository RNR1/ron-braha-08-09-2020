import React from 'react'
import Lottie from 'react-lottie'

import sun from '../../animations/sun.json'

const NoFavorites = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: sun,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<>
			<Lottie options={defaultOptions} height={150} width={150} />
			<h3>You have no favorites yet.</h3>
		</>
	)
}

export default NoFavorites