// --> INTERFASES 
interface Product {
    description : string;
    price : number;
}

interface TaxCalculationOptions {
    tax : number;               // [Impuestos]
    products : Product[]        // [Productos]
}

// --> FUNCIONES
function texCalculation ( options : TaxCalculationOptions ) : number[] {

    const {tax, products} = options

    let total = 0;
    products.forEach( product => {
        const {price} = product;
        total += price;
    })
    return [total, total * tax];
}

// --> MAIN
const phone : Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet : Product = {
    description: 'IPad',
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total, totalTax ] = texCalculation({
    tax : tax,
    products : shoppingCart,
})

console.log('Total: ', total);
console.log('Total: ', totalTax);




export {};