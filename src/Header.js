export class Header{
	constructor(title) {
		this.title = title;
	}
    render() {
        return`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">${this.title}</a>
  </div>
</nav>
`
    }
}