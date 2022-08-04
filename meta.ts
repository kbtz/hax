export default true

Object.alias = function (obj: Ɐ, map) {
	for (const alias in map)
		obj[alias] = obj[map[alias]]

	return obj
}

declare global {
	interface ObjectConstructor {
		alias
			<T extends ⱺ, M extends ꝛ<Ϟ, keyof T>>
			(obj: T, map: M): T & { [K in keyof M]: T[M[K]] }
	}
}