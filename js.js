/*Inicio de las Declaracion de variables globales*/
let runningTotal = 0;
let buffer = "0";
let previusOperator;

const screen = document.querySelector('.screen');
/*Fin  de las Declaraciones de variables globales*/
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer; 
}
/*validacion del symbol = simbolo matematico*/
function handleSymbol(symbol){
    switch (symbol) {
        case 'C':
            buffer = '0'
            runningTotal = 0;
            break;
        case '=':
            if(previusOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previusOperator = null;
            buffer = runningTotal;
            runningTotal = 0
        break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
        break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}
/*validacion del symbol = simbolo matematico*/
/*Inicio de las funtion = funciones o acciones de la calculadora*/
function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);
    
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previusOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previusOperator === '+'){
        runningTotal += intBuffer;
    }else if(previusOperator === '−'){
        runningTotal -= intBuffer; 
    }else if(previusOperator === '×') {
        runningTotal *= intBuffer;
    }else if(previusOperator === '÷') {
        runningTotal /=intBuffer;
        
    }
}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click' , function(event){
        buttonClick(event.target.innerText);
    })
} 

init();
/*Fin de las funtion = funciones o acciones de la calculadora*/