export default true

Object.assign(window, {
	after: (s: ꭖ, f: ʄ, ...a: Ɐ[]) => setTimeout(() => f(...a), s * 1000),
	every: (s: ꭖ, f: ʄ, ...a: Ɐ[]) => setInterval(() => f(...a), s * 1000),
	sleep: (s: ꭖ) => new Promise(r => setTimeout(r, s * 1000))
})

Function.prototype.after = function (this: ʄ, s: ꭖ, ...a: Ɐ[]) {
	return after(s, this, ...a)
}

Function.prototype.every = function (this: ʄ, s: ꭖ, ...a: Ɐ[]) {
	return every(s, this, ...a)
}

const hodl = new WeakMap<ʄ, ꭖ>()
Function.prototype.debounce = function (this: ʄ, s: ꭖ, ...a: Ɐ[]) {
	if (hodl.has(this)) {
		clearInterval(hodl.get(this))
		hodl.delete(this)
	}

	const interval = after(s, this, ...a)
	hodl.set(this, interval)
	return interval
}

declare global {
	function after(sec: ꭖ, fn: ʄ, ...args: Ɐ[]): ꭖ
	function every(sec: ꭖ, fn: ʄ, ...args: Ɐ[]): ꭖ
	function sleep(sec: ꭖ): Promise<Ɐ>

	interface Function {
		after(sec: ꭖ, ...args: Ɐ[]): ꭖ
		every(sec: ꭖ, ...args: Ɐ[]): ꭖ
		debounce(sec: ꭖ, ...args: Ɐ[]): ꭖ
	}
}
