// --> INTERFACES
export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    product : Product[];
}

// --> FUNCTIONS
export function taxCalculation (options : TaxCalculationOptions) : [number, number] {
    const { tax, product } = options;
    let total = 0;
    product.forEach( ({price}) => {
        total += price;
    });
    return [total, total * tax];
}

// --> MAIN 
const phone : Product = {
    description: 'Nokia',
    price : 150
};

const tablet : Product = {
    description: 'iPad',
    price : 250
};

const shoopingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    product: shoopingCart,
    tax : tax,
});

console.log('Total from 06: ', total);
console.log('Total Tax from 06: ', totalTax);