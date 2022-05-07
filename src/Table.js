export class Table {
    constructor(data) {
        this.data = data;
    }


    render(filter) {
        return `<div class="table__wrapper">${this.renderTable()}</div>`;
    }

    renderTable(filter) {

        console.log(filter);

        let innerHTML = '<table class="table table-striped">';
        for (let i = 0; i < this.data.length; i++) {
            let innerLine= '<tr>';
            let filterFlag = false;
            for (let j = 0; j < this.data[i].length; j++) {
                filterFlag |= this.data[i][j].includes(filter);
                innerLine += `<td>${this.data[i][j]}</td>`;
            }
            if (!filter)
                filterFlag = true;
            innerLine += '</tr>';
            innerHTML += filterFlag?innerLine:'';
 
        }
        innerHTML += '</table>'
        return innerHTML;
    }
}