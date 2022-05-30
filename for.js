for(var i = 1; i <= 12; i++){
    //console.log("2 x "+i + " = ", 2*i);
    console.log(`3 x  ${i} = ${3 * i}`);
}

console.log("====================");

//for off
var num = [1,2,3,4,5,6,7,8,9,10,11,12]
for(var number of num){
    console.log(`3 x ${number} = ${3 * number}`);
}

//for in
function Mobile(model_no){
    this.model = model_no
    this.Color = "Midnight Blue"
    this.Ram = "4GB"
}

let onePlus = new Mobile("Nord");
for(let props in onePlus){
    console.log(`${props} : ${onePlus[props]}`);
}