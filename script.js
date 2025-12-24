const numberOne = document.getElementById("one")
const numberTwo = document.getElementById("two")
const numberThree = document.getElementById("three")
const numberFour = document.getElementById("four")
const numberFive = document.getElementById("five")
const numberSix = document.getElementById("six")
const numberSeven = document.getElementById("seven")
const numberEigth = document.getElementById("eigth")
const numberNine = document.getElementById("nine")
const numberZero = document.getElementById("zero")
const display = document.getElementById("display")
const additon = document.getElementById("plus")
const subattraction = document.getElementById("minus")
const multiplication = document.getElementById("times")
const division = document.getElementById("divide")
const assign = document.getElementById("assign")
const clear = document.getElementById("clear")
const deleteBtn = document.getElementById("delete")
const dot = document.getElementById("comma")

// variabel menyimpan angka sebelum di tampilkan di UI
let currentNumber = "";
let previousNumber = "";
let operator = "";
let result = "";

//update display function
function updateDisplay(num){
    currentNumber += num
    if(display.textContent === "0"){
        display.textContent = num
    }else{ 
        display.textContent += num
    }
}
//function validation
function operatorValidation(symbol) {
    if(!currentNumber){
        if(previousNumber){
            operator = symbol
            display.textContent = previousNumber + operator
        }else{
            operator = ""
        }
        
    }else{
        if(!previousNumber){
            operator = symbol
            previousNumber += currentNumber
        }else{
            previousNumber = calculate(previousNumber,operator,currentNumber)
            operator = symbol
        }
        currentNumber = ""
        display.textContent = previousNumber + operator
    }
}
//calculate
function calculate(aString,operator,bString){
    let aNumber = Number(aString);
    let bNumber = Number(bString);
    result =  operatorSwitch(aNumber,operator,bNumber);
    currentNumber = "";
    previousNumber ="";
    return currentNumber = String(result);
}

// opertor string => operator
function operatorSwitch(a,operator,b){
    switch(operator){
        case "+":
        return a+b
        case "-":
        return a-b
        case "x":
        return a*b
        case "÷":
        return a/b
        default:
        return "error"
    }
}

//number button function
numberOne.addEventListener("click", () => {
    updateDisplay("1")
})
numberTwo.addEventListener("click", () => {
    updateDisplay("2")
})
numberThree.addEventListener("click", () => {
    updateDisplay("3")
})
numberFour.addEventListener("click", () => {
    updateDisplay("4")
})
numberFive.addEventListener("click", () => {
    updateDisplay("5")
})
numberSix.addEventListener("click", () => {
    updateDisplay("6")
})
numberSeven.addEventListener("click", () => {
    updateDisplay("7")
})
numberEigth.addEventListener("click", () => {
    updateDisplay("8")
})
numberNine.addEventListener("click", () => {
    updateDisplay("9")
})
numberZero.addEventListener("click", () => {
    updateDisplay("0")
})
dot.addEventListener("click", () => {
    if(!currentNumber.includes(".")){
        if(currentNumber === ""){
            updateDisplay("0.")
        } else {
            updateDisplay(".")
        }
    }
})

//operator function


additon.addEventListener("click", ()=>{
    operatorValidation("+")
})
subattraction.addEventListener("click", ()=>{
    operatorValidation("-")
})
multiplication.addEventListener("click", ()=>{
    operatorValidation("x")
})
division.addEventListener("click", ()=>{
    operatorValidation("÷")
})

assign.addEventListener("click",()=>{
    display.textContent = calculate(previousNumber,operator,currentNumber)
})
// clear button function
clear.addEventListener("click",()=>{
    currentNumber = "";
    previousNumber = "";
    operator = "";
    result = "";
    display.textContent = "0"
})

deleteBtn.addEventListener("click",()=>{
    if(currentNumber){
        currentNumber = currentNumber.slice(0,-1)
        display.textContent = currentNumber || "0"
    } else if(operator){
        operator = ""
        display.textContent = previousNumber || "0"
    } else if(previousNumber){
        previousNumber = previousNumber.slice(0,-1)
        display.textContent = previousNumber || "0"
    }
})






