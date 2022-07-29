export default true;

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
		return Reflect.ownKeys(this)
			.map(k => [k, this[k]])
	}]
])

declare global {
	const
		ḳ: unique symbol,
		ṿ: unique symbol,
		ḳṿ: unique symbol

	type ꝛ<K extends ʞ = Ϟ, V = Ɐ> = Record<K, V> & {
		[ḳ]?: ʭ<K>
		[ṿ]?: ʭ<V>
		[ḳṿ]?: ʭ<[K, V]>
	}

	interface Array<T> {
		[ḳ]?: ʭ<ꭖ>
		[ṿ]?: ʭ<T>
		[ḳṿ]?: ʭ<[ꭖ, T]>
	}
}
