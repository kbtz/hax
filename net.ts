export default true

declare global {
	function fetchText(url: Ϟ): Promise<Ϟ>
	function fetchData(url: Ϟ): Promise<ⱺ>
}

Object.assign(window, {
	async fetchText(url: Ϟ) {
		const res = await fetch(url)
		return await res.text()
	},
	async fetchData(url: Ϟ) {
		const res = await fetch(url)
		return await res.json()
	},
})