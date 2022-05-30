//Declaration Generic function
function sayHello(){
    return "Hello"
}

//Declaration Generic finction
function greeting(sayHello,name){
    return `${sayHello()},${name}`
}
//Call Variable
let message = greeting(sayHello,"Mark Zakerberg")
console.log(message)