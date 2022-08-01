export abstract class With<Context extends object> {
	static capture = eval(`
		(ctx, src, out) => {
			with (ctx) eval('out=' + src)
			return out }`)

	constructor(context: Context) {
		for (const name of Reflect.ownKeys(this)) {
			const value = this[name]
			if (typeof value != 'function') continue
			if (name == 'constructor') continue

			let source = value.toString()
			if (!source.startsWith('function'))
				source = 'function ' + source

			this[name] = With.capture(context, source)
		}
	}
}