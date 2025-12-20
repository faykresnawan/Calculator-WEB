let currentNumber = "";
let previousNumber = null;
let result = "";

function tombolSatu(){
    return currentNumber += "1"
}

function tambah(){
    previousNumber += Number(currentNumber)
    return result  = previousNumber + Number(currentNumber)
} 
function samaDengan(){
    return currentNumber = eval(currentNumber)
}
function tombolTambah(){
    return currentNumber += "+"
}
tombolSatu()
tombolTambah()
tombolSatu()
samaDengan()
// tombolSatu()
// tambah()
// tombolSatu()
// samaDengan()

console.log(currentNumber);
