import { Title } from "./Title";
import { Container } from "./Container";
import { Header } from "./Header";
import { SearchInput } from "./SearchInput";
import {Lorem} from "./Lorem";
import { Table } from "./Table";

export class App {
    run() {
        let container = new Container();
        let header = new Header('table-search');
        //let title = new Title('table-search');
        let lorem = new Lorem();
        let data = [];
        for (let i = 0; i <100; i++) {
            let line = [];
            for (let j = 0; j < 10; j++) {
                !j?line.push(i.toString()):line.push(lorem.generate(lorem.rand(10)+1));
            }
            data.push(line);
        }
        let table = new Table(data);
        let searchInput = new SearchInput(table);
 
        container.pushComponent(header);
        //container.pushComponent(title);
        container.pushComponent(searchInput);
        container.pushComponent(table);

        container.render();

        searchInput.init();
    }
}