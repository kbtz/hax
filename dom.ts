export default true

declare global {
	type Tags = HTMLElementTagNameMap & SVGElementTagNameMap
	type WinEv = WindowEventMap

	const sel: typeof select
	function select<T extends keyof Tags>(selector: T): Tags[T] | ᵾ
	function select(selector: Ϟ): HTMLElement | ᵾ

	function trigger(event: keyof WinEv): ꝟ

	function listen
		(events: { [K in keyof WinEv]?: (ev: WinEv[K]) => ꝟ }): ꝟ;
	function listen
		<K extends keyof WinEv>
		(type: K, listener: (this: Window, ev: WinEv[K]) => ꝟ): ꝟ;
}

import './meta'

const doc = Object.alias(document, {
	id: 'getElementById',
	tag: 'getElementsByTagName',
	name: 'getElementsByClassName',
	query: 'querySelector',
})

Object.assign(window, {
	sel: (s) => window.select(s),
	listen: (e, h) => {
		if (typeof e == 'string')
			return window.addEventListener(e, h)

		for (const ev in e) {
			window.addEventListener(ev, e[ev])
		}
	},
	select(s: Ϟ, s1 = s[0], q = s.slice(1)) {
		switch (s1) {
			case '#': return doc.id(q)
			case '.': return doc.name(q)[0]
			case '?': return doc.query(q)
			default: return doc.tag(s)[0]
		}
	},
	trigger(name) {
		window.dispatchEvent(new Event(name))
	}
})