// # Forma 1: usando "funtion"
function addNumbers(a : number, b : number){
    return a + b;
}

// # Forma 2: Usando constates declarativas
const addNumbersArrow = (a : number, b : number) : string => {
    return (a + b).toString();
}

const resultado1 : number = addNumbers(1,2);
const resultado2 : string = addNumbersArrow(1,2);

console.log({resultado1, resultado2 })

export {};