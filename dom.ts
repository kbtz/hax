export default true

import './meta'

type Tags = HTMLElementTagNameMap & SVGElementTagNameMap

const doc = Object.alias(document, {
	id: 'getElementById',
	tag: 'getElementsByTagName',
	name: 'getElementsByClassName',
	query: 'querySelector',
})

Object.assign(window, {
	sel: (s) => window.select(s),
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

declare global {
	const sel: typeof select
	function select<T extends keyof Tags>(selector: T): Tags[T] | ᵾ
	function select(selector: Ϟ): HTMLElement | ᵾ
	function trigger(event: keyof WindowEventMap): ꝟ
}