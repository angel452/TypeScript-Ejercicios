function classDecorator <T extends { new (...args:[]): {} }>( 
    constructor: T
){
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty : string = 'Abc123';

    print() {
        console.log('Hola mundo');
    }
}

console.log('SuperClass:', SuperClass);

const instance = new SuperClass();
console.log('instance:', instance);