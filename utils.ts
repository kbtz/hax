type Setter = (t: ⱺ, p: ʞ, v: Ɐ) => ϕ
type Getter = (t: ⱺ, p: ʞ) => ϕ

const
	options = Object.seal({
		enumerable: false,
		configurable: true
	}),
	prop = Reflect.defineProperty,
	trap = (obj: ⱺ, set: Setter) => new Proxy(obj, { set }),
	give = (get: Getter) => new Proxy({}, { get }),
	take = (set: Setter) => new Proxy({}, { set }),
	register = symbols => {
		for (const name in symbols) window[name] = Symbol(symbols[name])
	},
	extend = ({ prototype }: ObjectConstructor, props: ʭ<[ᴕ, Function]>) => {
		//	TODO Reflect.defineProperty(prototype)
	}

const x: unique symbol = Symbol(), props: ꝛ<ᴕ, Function> = {
	[x]: function () { }
}

export { register, extend }