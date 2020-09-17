import * as Types from './types'
import City from '../../models/City'
import { AutocompleteDto, GeoPositionDto } from '../../api/transform'

export const autoComplete = (payload: string) => ({
	type: Types.AUTOCOMPLETE,
	payload
})

export const autoCompleteStart = () => ({
	type: Types.AUTOCOMPLETE_START
})

export const autoCompleteSuccess = (payload: AutocompleteDto[]) => ({
	type: Types.AUTOCOMPLETE_SUCCESS,
	payload
})

export const autoCompleteFailed = (payload: Error) => ({
	type: Types.AUTOCOMPLETE_FAILED,
	payload: payload.message
})

export const clearResults = () => ({
	type: Types.CLEAR_RESULTS
})

export const geoPosition = (payload: { lat: string; lon: string }) => ({
	type: Types.GEOPOSITION,
	payload
})

export const geoPositionStart = () => ({
	type: Types.GEOPOSITION_START
})

export const geoPositionSuccess = () => ({
	type: Types.GEOPOSITION_SUCCESS
})

export const geoPositionFailed = (payload: Error) => ({
	type: Types.GEOPOSITION_FAILED,
	payload: payload.message
})

export const search = (payload: GeoPositionDto) => ({
	type: Types.SEARCH,
	payload
})

export const searchStart = () => ({
	type: Types.SEARCH_START
})

export const searchSuccess = (payload: City) => ({
	type: Types.SEARCH_SUCCESS,
	payload
})

export const searchFailed = (payload: Error) => ({
	type: Types.SEARCH_FAILED,
	payload: payload.message
})

export const toggleFavorite = () => ({
	type: Types.TOGGLE_FAVORITE
})

export const toggleFavoriteSuccess = (payload: City[]) => ({
	type: Types.TOGGLE_FAVORITE_SUCCESS,
	payload
})

export const toggleDarkMode = () => ({
	type: Types.TOGGLE_DARK_MODE
})

export const toggleDarkModeSuccess = (payload: boolean) => ({
	type: Types.TOGGLE_DARK_MODE_SUCCESS,
	payload
})

export const toggleTempUnit = () => ({
	type: Types.TOGGLE_TEMP_UNIT
})

export const toggleTempUnitSuccess = (payload: boolean) => ({
	type: Types.TOGGLE_TEMP_UNIT_SUCCESS,
	payload
})
