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

Object.assign(window, {
	each: (obj, fn) =>
		Reflect.ownKeys(obj)
			.forEach(k => fn(obj[k], k)),
	map: (obj, fn) => {
		Reflect.ownKeys(obj)
			.forEach(k => obj[k] = fn(obj[k], k))
		return obj
	}
})

declare global {
	const
		ḳ: unique symbol,
		ṿ: unique symbol,
		ḳṿ: unique symbol

	function map
		<K extends ʞ, V, R>
		(obj: ꝛ<K, V>, fn: (v: V, k: K) => R): { [P in K]: R }

	function map
		<T extends ⱺ, K extends ʞ, R>
		(obj: T, fn: (v: Ɐ, k: K) => R): { [P in K]: R }

	function each
		<T extends ⱺ, K extends keyof T, V = T[K]>
		(obj: T, fn: (v: V, k: K) => Ɐ): void

	interface Object {
		[ḳ]?: Ɐ[]
		[ṿ]?: Ɐ[]
		[ḳṿ]?: [Ɐ, Ɐ][]
	}

	type ꝛ<K extends ʞ = Ϟ, T = Ɐ> = {
		[ḳ]?: K[]
		[ṿ]?: T[]
		[ḳṿ]?: [K, T][]
	} & Record<K, T>
}
