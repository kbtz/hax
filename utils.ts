const
	prop = (target: ⱺ, key: ʞ, fn: ʄ, attributes: PropertyDescriptor = {}) =>
		Reflect.defineProperty(target, key, {
			enumerable: false,
			configurable: true,
			writable: !!fn.length,
			[fn.length ? 'set' : 'get']: fn,
			...attributes
		}),
	register = (...symbols: Ϟ[]) =>
		symbols.map(s => window[s] = Symbol()),
	extend = ({ prototype }: ObjectConstructor, props: ʭ<[ᴕ, ʄ]>) =>
		props.map(([symbol, fn]) => prop(prototype, symbol, fn))

export { register, extend }