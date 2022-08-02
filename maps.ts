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
	}],
])

Object.prototype.map = function (this: ⱺ, f: (v, k) => Ɐ) {
	Reflect.ownKeys(this)
		.forEach(k => this[k] = f(this[k], k))
	return this
}

declare global {
	const
		ḳ: unique symbol,
		ṿ: unique symbol,
		ḳṿ: unique symbol

	interface Object {
		[ḳ]?: Ɐ[]
		[ṿ]?: Ɐ[]
		[ḳṿ]?: [Ɐ, Ɐ][]
		map?: <R>(f: (v, k) => R) => Ɐ
	}

	type ꝛ<K extends ʞ = Ϟ, T = Ɐ> = {
		[ḳ]?: K[]
		[ṿ]?: T[]
		[ḳṿ]?: [K, T][]
		map?: <R>(f: (v: T, k: K) => R) => ꝛ<K, R>
	} & Record<K, T>
}
