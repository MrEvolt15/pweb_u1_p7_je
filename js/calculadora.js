let num1 = 0;
let num2 = 0;
let operacion = "";
let isSecondNumber = false;

function setearValor(valor) {
    let valor2 = document.getElementById('id-display').innerText;
    console.log(valor2);
    document.getElementById('id-display').innerText = valor;

}
function setearValorConcatenado(valor) {
    let display = document.getElementById('id-display');
    display.innerText += valor;
    if (!isSecondNumber) {
        num1 = parseInt(display.innerText) || 0;
    } else {
        num2 = parseInt(display.innerText.split(operacion)[1]) || 0;
    }
}
function limpiarDisplay() {
    document.getElementById('id-display').innerText = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
    isSecondNumber = false;
}
function limpiarUltimo() {
    let valor = document.getElementById('id-display').innerText;
    let valor2 = valor.substring(0, valor.length - 1);
    document.getElementById('id-display').innerText = valor2;
    if (!isSecondNumber) {
        num1 = parseInt(valor2) || 0;
    } else {
        num2 = parseInt(valor2.split(operacion)[1]) || 0;
    }
}    
function recibirValor(valor) {
    console.log(valor);
    num1 = num1 * 10 + parseInt(valor);
    console.log(num1);
}
function recibirValor2(valor) {
    console.log(valor);
    num2 = num2 * 10 + parseInt(valor);
    console.log(num2);
}   
function recibirOperacion(op) {
    operacion = op;
    isSecondNumber = true;
    document.getElementById('id-display').innerText += op;
}
function sumar() {
    recibirOperacion("+");
}
function restar() {
    recibirOperacion("-");
}
function multiplicar() {
    recibirOperacion("*");
}
function dividir() {
    recibirOperacion("/");
}
function borrar() {
    limpiarDisplay();
    this.num1 = null;
    this.num2 = null;
    this.operacion = null;
}
function ponerValor(idelemento){
    if(this.operacion == null){
        recibirValor(document.getElementById('idelemento').innerText);
    }else{
        recibirValor2(document.getElementById('idelemento').innerText);
    }
}
function calcular() {
    let resultado;
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
    }
    document.getElementById('id-display').innerText = resultado;
    num1 = resultado;
    num2 = 0;
    operacion = "";
    isSecondNumber = false;
}