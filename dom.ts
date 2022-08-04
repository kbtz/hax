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
	select(s: Ϟ, _ = s[0]) {
		switch (_) {
			case '#': return doc.id(s)
			case '.': return doc.name(s)[0]
			case '?': return doc.query(s)
			default: return doc.tag(s)[0]
		}
	},
	trigger(name) {
		window.dispatchEvent(new Event(name))
	}
})

declare global {
	function select<T extends keyof Tags>(selector: T): Tags[T] | ᵾ
	function select(selector: Ϟ): HTMLElement | ᵾ
	function trigger(event: keyof WindowEventMap): void
}