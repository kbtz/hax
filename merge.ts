export default true

import { register, extend } from './utils'

register('ͼ', 'ͽ')

extend(Object, [
	[ͼ, function (this: ⱺ, sender: ⱺ) {
		Object.assign(this, sender)
		return true
	}],
	[ͽ, function (this: ⱺ, receiver: ⱺ) {
		Object.assign(receiver, this)
		return true
	}],
])

declare global {
	/**
	 * Assign properties of the righ-hand object
	 * into the the left-hand object.
	 * ```
	 * A[ͽ] = B
	 * ```
	 */
	const ͼ: unique symbol

	/** 
	 * Assign properties of the left-hand object
	 * into the the right-hand object. 
	 * 
	 * In this variation the assignment 
	 * returns the targeted object.
	 * ```
	 * return A[ͽ] = B // Object.assign(B, A)
	 * ```
	 */
	const ͽ: unique symbol

	interface Object {
		[ͼ]: ⱺ
		[ͽ]: ⱺ
	}
}
