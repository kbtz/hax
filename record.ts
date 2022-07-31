export default true

import { register, extend } from './utils'

register('ḳ', 'ṿ', 'ḳṿ')

extend(Object, [
	[ḳ, function (this: ⱺ) {
		return Reflect.ownKeys(this)
	}],
	[ṿ, function (this: ⱺ) {
		return Object.values(this)
	}],
	[ḳṿ, function (this: ⱺ) {
		return Array.from(
			Reflect.ownKeys(this),
			k => [k, this[k]]
		)
	}]
])

declare global {
	const
		ḳ: unique symbol,
		ṿ: unique symbol,
		ḳṿ: unique symbol

	interface Object {
		[ḳ]?: Ɐ[]
		[ṿ]?: Ɐ[]
		[ḳṿ]?: [Ɐ, Ɐ][]
	}

	interface Array<T> {
		[ḳ]?: ꭖ[]
		[ṿ]?: T[]
		[ḳṿ]?: [ꭖ, T][]
	}

	type ꝛ<K extends ʞ = Ϟ, T = Ɐ> = {
		[ḳ]?: K[]
		[ṿ]?: T[]
		[ḳṿ]?: [K, T][]
	} & Record<K, T>
}
