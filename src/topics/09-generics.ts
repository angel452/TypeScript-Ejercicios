export function whatsMyType<T>(argument : T) : T {
    return argument
}

let amIString = whatsMyType<string>('hello world')
let amINumber = whatsMyType<number>(100)
let amIArr = whatsMyType<number[]>([1, 2, 3])

console.log(amIString.split(''))
console.log(amINumber.toFixed())
console.log(amIArr.concat([4, 5, 6]))
