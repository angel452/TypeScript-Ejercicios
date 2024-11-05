import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart : Product[] = [
    {
        description: 'Nokia',
        price : 150
    },
    {
        description: 'iPad',
        price : 250
    }
]

const phone : Product = {
    description: 'Nokia',
    price : 150
};

const tablet : Product = {
    description: 'iPad',
    price : 250
};

const [total, tax] = taxCalculation({
    product: shoppingCart,
    tax : 0.15,
});

console.log(shoppingCart);
console.log(total);
console.log(tax);