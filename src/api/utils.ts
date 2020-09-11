import client from './client'
import Axios, { CancelTokenSource } from 'axios'
import { AutocompleteDto } from './transform'
const resources: { [query: string]: AutocompleteDto[] } = {}

const makeRequestCreator = () => {
	let cancel: CancelTokenSource

	return async (query: string) => {
		if (cancel) {
			cancel.cancel()
		}
		cancel = Axios.CancelToken.source()
		try {
			if (resources[query]) {
				return resources[query]
			}
			const result = await client.autocomplete(query, {
				cancelToken: cancel.token
			})
			resources[query] = result

			return result
		} catch (error) {
			if (!Axios.isCancel(error)) {
				console.log('Something went wrong: ', error.message)
			}
		}
	}
}

export const autocomplete = makeRequestCreator()
