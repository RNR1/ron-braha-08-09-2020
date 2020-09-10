import { Reducer } from 'redux'
import City from '../../models/City'
import * as Types from '../actions/types'
import { AutocompleteDto } from '../../api/utils'
import {
	getInitialFavorites,
	isFavorite,
	removeFromFavorites,
	addToFavorites
} from '../helpers/favorites'
import { getInitialMode } from '../helpers/darkMode'

export interface AppState {
	darkMode: boolean
	tempUnit: boolean
	queryResults: AutocompleteDto[]
	searching: boolean
	loading: boolean
	error: string | null
	currentCity: City | null
	favoriteCities: City[]
}

const initialState: AppState = {
	darkMode: getInitialMode(),
	tempUnit: false,
	queryResults: [],
	searching: false,
	loading: false,
	error: null,
	currentCity: null,
	favoriteCities: getInitialFavorites()
}

const rootReducer: Reducer<AppState, { type: string; payload: any }> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case Types.AUTOCOMPLETE_START:
			return { ...state, searching: true }
		case Types.AUTOCOMPLETE_SUCCESS:
			return {
				...state,
				searching: false,
				error: null,
				queryResults: action.payload
			}
		case Types.AUTOCOMPLETE_FAILED:
			return { ...state, searching: false, error: action.payload }
		case Types.CLEAR_RESULTS:
			return { ...state, queryResults: [] }
		case Types.GEOPOSITION_START:
			return { ...state, loading: true }
		case Types.GEOPOSITION_SUCCESS:
			return { ...state, loading: false, error: null }
		case Types.GEOPOSITION_FAILED:
			return { ...state, loading: false, error: action.payload }
		case Types.SEARCH_START:
			return { ...state, searching: true }
		case Types.SEARCH_SUCCESS:
			return {
				...state,
				searching: false,
				error: null,
				currentCity: action.payload
			}
		case Types.SEARCH_FAILED:
			return { ...state, searching: false, error: action.payload }
		case Types.TOGGLE_FAVORITE:
			return {
				...state,
				favoriteCities: isFavorite(state.favoriteCities, state.currentCity!)
					? removeFromFavorites(state)
					: addToFavorites(state)
			}
		case Types.TOGGLE_DARK_MODE:
			localStorage.setItem('dark', JSON.stringify(!state.darkMode))
			return { ...state, darkMode: !state.darkMode }
		case Types.TOGGLE_TEMP_UNIT:
			return { ...state, tempUnit: !state.tempUnit }
		default:
			return state
	}
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
