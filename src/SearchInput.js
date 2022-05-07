export class SearchInput {
    constructor(table) {
        this.table = table;
        this.element = null;
        this.tableWrapper = null;
    }

    init() {
        this.element = document.querySelector('.search__input');
        this.tableWrapper = document.querySelector('.table__wrapper');
        this.element.addEventListener('change', (e) => {
            this.tableWrapper.innerHTML = this.table.renderTable(this.element.value);
        })
    }

    render() {

        return `
        <form class="search__form block-center">
        <div class="mb-3  search__group">
            <input type="text" class="form-control search__input" id="exampleFormControlInput1" placeholder="search string">
        </div>
        </form>

 
        `

    }
}