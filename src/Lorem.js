export class Lorem {

	constructor() {
		this.lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur, sint consequatur sed atque, voluptates porro nisi labore soluta officia aspernatur ducimus. Sapiente iure pariatur iusto excepturi neque nam esse omnis cumque, tempore, molestias id, perferendis quidem! Adipisci, sapiente. Nobis dolore culpa expedita blanditiis odit ea dolorum perspiciatis error, et distinctio nihil aspernatur corporis? Non iste eligendi ipsa alias quas exercitationem consequuntur. Obcaecati error adipisci laudantium similique harum, alias veniam sed culpa vitae natus consequuntur incidunt magni debitis nihil ipsum aut soluta? Quae harum asperiores illo obcaecati quidem porro minus enim, autem non reprehenderit consectetur neque, itaque voluptate cupiditate magnam?`;
	}

	generate(n) {
		let result = '';
		let loremData = this.lorem.split(' ');
		for (let i = 0; i < n; i++) {
			let random = Math.trunc(Math.random() * loremData.length);
			result += `${loremData[random]} `
		}
		//result += `${loremData[loremData.length-1]}`
		return result;
	}

	rand(n) {
		return Math.trunc(Math.random() * n);
	}
}