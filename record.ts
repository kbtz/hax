export default true;

import { register, extend } from './utils'

register({
	'ḳ': 'keys',
	'ṿ': 'values',
	'ḳṿ': 'key/value pairs',
})

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
	const ḳ: unique symbol, ṿ: unique symbol, ḳṿ: unique symbol

	type ꝛ<K extends ʞ = ϛ, V = Ɐ> = Record<K, V> & {
		[ḳ]?: ʭ<K>
		[ṿ]?: ʭ<V>
		[ḳṿ]?: ʭ<[K, V]>
	}
}
