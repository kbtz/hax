export default true

declare global {
	function after(sec: ꭖ, fn: ʄ, ...args: Ɐ[]): ꭖ
	function every(sec: ꭖ, fn: ʄ, ...args: Ɐ[]): ꭖ
	function sleep(sec: ꭖ): Promise<Ɐ>

	interface Function {
		after(sec: ꭖ, ...args: Ɐ[]): ꭖ
		every(sec: ꭖ, ...args: Ɐ[]): ꭖ
		debounce(sec: ꭖ, ...args: Ɐ[]): ꝟ
	}
}

Object.assign(window, {
	after: (s: ꭖ, f: ʄ, ...a: Ɐ[]) => setTimeout(() => f(...a), s * 1000),
	every: (s: ꭖ, f: ʄ, ...a: Ɐ[]) => setInterval(() => f(...a), s * 1000),
	sleep: (s: ꭖ) => new Promise(r => setTimeout(r, s * 1000))
})

const hodl = new WeakMap<ʄ, ꭖ>()
Object.assign(Function.prototype, {
	after(this: ʄ, s: ꭖ, ...a: Ɐ[]) {
		return after(s, this, ...a)
	},
	every(this: ʄ, s: ꭖ, ...a: Ɐ[]) {
		return every(s, this, ...a)
	},
	debounce(this: ʄ, s: ꭖ, ...a: Ɐ[]) {
		clearInterval(hodl.get(this))
		hodl.set(this, after(s, this, ...a))
	}
})