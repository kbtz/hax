export default true

Array.prototype.spread = function (this: Ɐ[][], mapper: ʄ) {
	return this.map(el => mapper(...el))
}

declare global {
	interface Array<T> {
		spread: <R>(mapper: (...e: T extends Ɐ[] ? T : Ɐ[]) => R) => R[]
	}
}