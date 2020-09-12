import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Tooltip from '@material-ui/core/Tooltip'
import MyLocationIcon from '@material-ui/icons/MyLocation'

import { geoPosition } from '../../store/actions/app'

const LocationIcon = () => {
	const [color, setColor] = useState<'primary' | 'error'>('error')
	const title = 'Search by location'
	const dispatch = useDispatch()

	const enableLocation = () => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setColor('primary')
				const coords = { lat: latitude.toString(), lon: longitude.toString() }
				dispatch(geoPosition(coords))
			},
			() => {
				setColor('error')
			},
			{ enableHighAccuracy: true }
		)
	}

	return (
		<Tooltip title={title}>
			<MyLocationIcon
				aria-label={title}
				color={color}
				onClick={enableLocation}
			/>
		</Tooltip>
	)
}

export default LocationIcon
