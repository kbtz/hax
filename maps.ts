export default true

declare global {
	const
		ḳ: unique symbol,
		ṿ: unique symbol,
		ḳṿ: unique symbol

	function map
		<K extends ʞ, V, R>
		(obj: ꝛ<V, K>, fn: (v: V, k: K) => R): { [P in K]: R }

	function map
		<T extends ⱺ, K extends ʞ, R>
		(obj: T, fn: (v: Ɐ, k: K) => R): { [P in K]: R }

	function each
		<T extends ⱺ, K extends keyof T = keyof T, V = T[K]>
		(obj: T, fn: (v: V, k: K) => Ɐ): void

	function pair
		<F extends (...a: Ɐ[]) => Ɐ, A extends Parameters<F>>
		(obj: Partial<ꝛ<A[1], A[0]>>, fn: F)

	interface Object {
		[ḳ]?: Ɐ[]
		[ṿ]?: Ɐ[]
		[ḳṿ]?: [Ɐ, Ɐ][]
	}

	type ꝛ<T = Ɐ, K extends ʞ = Ϟ> = {
		[ḳ]?: K[]
		[ṿ]?: T[]
		[ḳṿ]?: [K, T][]
	} & Record<K, T>
}

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
	pair: (obj, fn) =>
		Reflect.ownKeys(obj)
			.forEach(k => fn(k, obj[k])),
	map: (obj, fn) => {
		Reflect.ownKeys(obj)
			.forEach(k => obj[k] = fn(obj[k], k))
		return obj
	}
})