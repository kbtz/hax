export default true
declare global {
	function fetchText(url: Ϟ): Promise<Ϟ>
}

Object.assign(window, {
	async fetchText(url: Ϟ) {
		const res = await fetch(url)
		return await res.text()
	}
})