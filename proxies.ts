export default true

Proxy.writer = function (set, sub: ⱺ = {}) {
	set.bind(this)
	return new Proxy(sub, {
		get(_, k) { return sub[k] },
		set(_, k, v) {
			if (set(k, v)) {
				sub[k] = v
				return true
			}

			return false
		}
	})
}

declare global {
	interface ProxyConstructor {
		writer(set: (k: ʞ, v: Ɐ) => ꙕ)
	}
}