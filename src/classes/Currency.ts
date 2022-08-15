import currencies from "../../json/currencies.json"
import type { CurrencyCode, CurrencyName, CurrencySymbol } from "../types/base"

export interface CurrencyProperties {
	code: CurrencyCode
	symbol: CurrencySymbol
	name: CurrencyName
}
class Currency implements CurrencyProperties {
	code: CurrencyCode
	symbol: CurrencySymbol
	name: CurrencyName

	constructor(currencyCode: CurrencyCode) {
		if (!currencies[currencyCode]) {
			throw new Error(`${currencyCode} is not a valid currency.`)
		}
		this.code = currencyCode
		this.symbol = currencies[currencyCode].symbol as CurrencySymbol
		this.name = currencies[currencyCode].name as CurrencyName
	}
}

export default Currency