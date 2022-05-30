function add(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

function mul(x,y){
    return x*y
}

function div(x,y){
    return x/y
}
function liv(x,y){
    return x-y
}
function calculate(callback,a,b){
    return `${callback(a,b)}`
}

let x = calculate(add,2,1);
let y = calculate(sub,2,1);
let z = calculate(mul,2,1);
let a = calculate(div,2,1);
let champ = calculate(liv,2,1)

console.log(`add is x + y = ${x}`)
console.log(`sub is x - y = ${y}`)
console.log(`mul is x * y = ${z}`)
console.log(`div is x / y = ${a}`)
console.log(`liv is x - y = ${champ}`)