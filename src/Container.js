export class Container {
    constructor() {
        this.components = [];
    }

    pushComponent(component) {
        this.components.push(component);
    }

    render() {
        let innerHTML = '';

        for (let i = 0; i < this.components.length; i++)
            innerHTML += this.components[i].render();
            
        let body = document.querySelector('body');
        body.innerHTML = `<div class="container">${innerHTML}</div>`;
    }
}