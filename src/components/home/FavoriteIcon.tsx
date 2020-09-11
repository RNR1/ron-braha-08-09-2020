import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Favorite from '@material-ui/icons/Favorite'
import NotFavorite from '@material-ui/icons/FavoriteBorderOutlined'

import { isFavorite } from '../../store/helpers/favorites'
import { toggleFavorite } from '../../store/actions/app'
import { RootState } from '../../store/root/reducer'

const FavoriteIcon = () => {
	const dispatch = useDispatch()
	const { favoriteCities, currentCity } = useSelector(
		(state: RootState) => state
	)

	const handleFavorite = () => dispatch(toggleFavorite())

	return (
		<span>
			{isFavorite(favoriteCities, currentCity!) ? (
				<Favorite color='error' onClick={handleFavorite} />
			) : (
				<NotFavorite color='error' onClick={handleFavorite} />
			)}
		</span>
	)
}

export default FavoriteIcon
