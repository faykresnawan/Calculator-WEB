// const numberOne = document.getElementById("one")
// const numberTwo = document.getElementById("two")
// const numberThree = document.getElementById("three")
// const numberFour = document.getElementById("four")
// const numberFive = document.getElementById("five")
// const numberSix = document.getElementById("six")
// const numberSeven = document.getElementById("seven")
// const numberEigth = document.getElementById("eigth")
// const numberNine = document.getElementById("nine")
// const numberZero = document.getElementById("zero")

//variabel menyimpan angka sebelum di tampilkan di UI
let currentNumber = "";
let previousNumber = "";
let operator = "";
let result = "";

//fungsi button Number dan Comma
function buttonOne(){
    return currentNumber += "1"
}
function buttonTwo(){
    return currentNumber += "2"
}
function buttonThree(){
    return currentNumber += "3"
}
function buttonFour(){
    return currentNumber += "4"
}
function buttonFive(){
    return currentNumber += "5"
}
function buttonSix(){
    return currentNumber += "6"
}
function buttonSeven(){
    return currentNumber += "7"
}
function buttonEigth(){
    return currentNumber += "8"
}
function buttonNine(){
    return currentNumber += "9"
}
function buttonZero(){
    return currentNumber += "0"
}
function buttonComma(){
    return currentNumber += "."
}

//function Operator
function additon(){
    previousNumber = currentNumber;
    currentNumber = "";
    return operator = "+"
}
function subattraction(){
    previousNumber = currentNumber;
    currentNumber = "";
    return operator = "-"
}
function multiplication(){
    previousNumber = currentNumber;
    currentNumber = "";
    return operator = "x"
}
function division(){
    previousNumber = currentNumber;
    currentNumber = "";
    return operator = "÷"
}

//function validasi operator
function operatorValidation(aNumber,operators,bNumber){
    switch (operators){
        case "+":
            return aNumber + bNumber;
        case "-":
            return aNumber - bNumber;
        case "x":
            return aNumber * bNumber;
        case "÷":
            if(bNumber === 0){
                return "ERROR"
            }
            return aNumber / bNumber
        default:
            return "ERROR"
    }
}

//function calculate
function calculate(aString,operators,bString){
    let aNumber = Number(aString)
    let bNumber= Number(bString)
    
    result = operatorValidation(aNumber,operators,bNumber)
    return result = String(result)
}






buttonEigth()
buttonFive()
buttonComma()
buttonEigth()
additon()
buttonEigth()
calculate(previousNumber,operator,currentNumber)

console.log(previousNumber);
console.log(operator);
console.log(currentNumber);
console.log(result);

