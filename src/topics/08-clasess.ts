export class Person {
    constructor(
        public name : string, 
        private address : string = 'No address'){}
}

export class Hero {
    constructor(
        public alterEgo : string,
        public age : number,
        public realName : string,
        public person : Person,
    ){}
}

const tony = new Person('Tony Stark', 'New York');
console.log(tony);

const iroman = new Hero('Ironman', 45, 'Tony Stark', tony);
console.log(iroman);