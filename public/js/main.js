
//Guardo en const los botones btngroup1
const screenOperation = document.querySelector('.screenoperation');
const screenResult = document.querySelector('.screenresult');
const one = document.querySelector('.btn1');
const two = document.querySelector('.btn2');
const three = document.querySelector('.btn3');
const four = document.querySelector('.btn4');
const five = document.querySelector('.btn5');
const six = document.querySelector('.btn6');
const seven = document.querySelector('.btn7');
const eight = document.querySelector('.btn8');
const nine = document.querySelector('.btn9');
const cero = document.querySelector('.btn0');
const clear = document.querySelector('.btnclr');
const equal = document.querySelector('.btnequal');
const coma = document.querySelector('.btncoma');
const pi = document.querySelector('.btnPi');

//Guardo en const los botones btngroup2
const addition = document.querySelector('.btnsuma');
const substraction = document.querySelector('.btnresta');
const multiplication = document.querySelector('.btnmult');
const division = document.querySelector('.btndiv');
const percent = document.querySelector('.btnporcent');
const exp = document.querySelector('.btnexpo');
const sqr2   = document.querySelector('.btnsquare');
const sqr3 = document.querySelector('.btncubic');
const sinx = document.querySelector('.btnsin');
const cosx = document.querySelector('.btncos');
const tgx = document.querySelector('.btntg');
const logx = document.querySelector('.btnlog');
const lnx = document.querySelector('.btnln');

//guardo en variables los operandos que aparecen en la pantalla de operaciones (screenoperation)
let operator1;
let operator2;
let operation;
let result;

//Eventos btngroup1
one.addEventListener('click', ()=>{
    screenOperation.textContent += "1";
    screenResult.textContent += "1";
})
two.addEventListener('click', ()=>{
    screenOperation.textContent += "2";
    screenResult.textContent += "2";
})
three.addEventListener('click', ()=>{
    screenOperation.textContent += "3";
    screenResult.textContent += "3";
})
four.addEventListener('click', ()=>{
    screenOperation.textContent += "4";
    screenResult.textContent += "4";
})
five.addEventListener('click', ()=>{
    screenOperation.textContent += "5";
    screenResult.textContent += "5";
})
six.addEventListener('click', ()=>{
    screenOperation.textContent += "6";
    screenResult.textContent += "6";
})
seven.addEventListener('click', ()=>{
    screenOperation.textContent += "7";
    screenResult.textContent += "7";
})
eight.addEventListener('click', ()=>{
    screenOperation.textContent += "8";
    screenResult.textContent += "8";
})
nine.addEventListener('click', ()=>{
    screenOperation.textContent += "9";
    screenResult.textContent += "9";
})
cero.addEventListener('click', ()=>{
    screenOperation.textContent += "0";
    screenResult.textContent += "0";
})
equal.addEventListener('click', ()=>{
    screenOperation.textContent += " = "
    operator2 = screenResult.textContent;
    console.log(operator2);
    solver();
    screenResult.textContent = result;
    
})
coma.addEventListener('click', ()=>{
    screenOperation.textContent += ".";
    screenResult.textContent += ".";
})
clear.addEventListener('click', ()=>{
    screenOperation.textContent = "";
    screenResult.textContent = "";
    //reset();
})
//Eventos btngroup2
pi.addEventListener('click', ()=>{
    screenOperation.textContent += "3.1416";
    screenResult.textContent += "3.1416";
})


addition.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "+";
    console.log(operation)
    screenOperation.textContent += " + ";
    screenResult.textContent = "";
    operator2 = screenResult.textContent;
    console.log(operator1)
    

})
substraction.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "-";
    console.log(operation)
    screenOperation.textContent += " - ";
    screenResult.textContent = "";
    operator2 = screenResult.textContent;
    console.log(operator1)    
    
})
multiplication.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "*";
    console.log(operation)
    screenOperation.textContent += " * ";
    screenResult.textContent = "";
    operator2 = screenResult.textContent;
    console.log(operator1) 
})
division.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "/";
    console.log(operation)
    screenOperation.textContent += " / ";
    screenResult.textContent = "";
    operator2 = screenResult.textContent;
    console.log(operator1) 
})
percent.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "%";
    console.log(operation)
    screenOperation.textContent += " % ";
    screenResult.textContent = "";
    operator2 = screenResult.textContent;
    console.log(operator1)
})
exp.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "^";
    console.log(operation)
    screenOperation.textContent += " exp ";
    screenResult.textContent = "";
    operator2 = screenResult.textContent;
    console.log(operator1);
})
sqr2.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "sqr";
    console.log(operation)
    screenOperation.textContent += " sqr ";
    screenResult.textContent = "";

})
sqr3.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "sqr3";
    console.log(operation)
    screenOperation.textContent += " sqr3 ";
    screenResult.textContent = "";
})
sinx.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "sin";
    console.log(operation)
    screenOperation.textContent += " sin()";
    screenResult.textContent = "";
})
cosx.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "cos";
    console.log(operation)
    screenOperation.textContent += " cos()";
    screenResult.textContent = "";
})
tgx.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "tg";
    console.log(operation)
    screenOperation.textContent += " tg()";
    screenResult.textContent = "";
})
logx.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "log";
    console.log(operation)
    screenOperation.textContent += " log()";
    screenResult.textContent = "";
})
lnx.addEventListener('click', ()=>{
    operator1 = screenResult.textContent;
    operation = "ln";
    console.log(operation)
    screenOperation.textContent += " ln()";
    screenResult.textContent = "";
})

const solver = ()=>{
    if (operation == "+"){
        result = parseFloat(operator1) + parseFloat(operator2);
    }
    else if (operation == "-"){
        result = parseFloat(operator1) - parseFloat(operator2);
    }
    else if (operation == "*"){
        result = parseFloat(operator1) * parseFloat(operator2);
    }
    else if (operation == "/"){
        result = parseFloat(operator1) / parseFloat(operator2);
    }
    else if (operation == "%"){
        result = parseFloat(operator1) * (operator2/100)
    }
    else if (operation == "^"){
        result = Math.pow(operator1,operator2);
    }
    else if (operation == "sqr"){
        result = Math.pow(operator1 , 0.5 );
    }
    else if (operation == "sqr3"){
        result = Math.pow(operator1 , (1/3));
    }
    else if (operation == "sin"){
        result = Math.sin(operator1);
    }
    else if (operation == "cos"){
        result = Math.cos(operator1);
    }
    else if (operation == "tg"){
        result = Math.tan(operator1);
    }
    else if (operation == "ln"){
        result = Math.log(operator1);
    }
    else if (operation == "log"){
        result = Math.log10(operator1)
    }
}