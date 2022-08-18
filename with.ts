export default true;

export class With<Context extends object> {
	static eval: (context: ⱺ, source: Ϟ) => Ɐ

	constructor(context: Context) {
		for (const [name, fn] of contextable(this)) {
			let source = fn.toString()
			if (!source.startsWith('function'))
				source = 'function ' + source

			this[name] = ʬ(context, source)
		}
	}
}

function contextable(subject: Ɐ): [Ϟ, ʄ][] {
	const
		proto = subject.__proto__,
		props = Reflect.ownKeys(proto) as Ϟ[]

	return props
		.filter(p => p != 'constructor')
		.filter(p => typeof proto[p] == 'function')
		.map(p => [p, proto[p]])
}

const ʬith = `
	<script>
	ʬ = (ctx, src, out) => {
		with (ctx) eval('out='+src)
		return out
	}
	</script>`

document.head.appendChild(
	document.createRange()
		.createContextualFragment(ʬith)
)

declare const ʬ: (ctx: ⱺ, src: Ϟ, out?) => ʄ