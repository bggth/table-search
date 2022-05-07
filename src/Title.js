export class Title {
	constructor(text) {
		this.text = text;
		document.title = text;
	}
	render() {
		return `<h1 class=body__title>${this.text}</h1>`
	}
}