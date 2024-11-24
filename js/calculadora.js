var num1 = null;
var num2 = null;
var operacion = null;
function setearValor(valor) {
    let valor2 = document.getElementById('id-display').innerText;
    console.log(valor2);
    document.getElementById('id-display').innerText = valor;

}
function setearValorConcatenado(valor) {
    let valor2 = document.getElementById('id-display').innerText;
    console.log(valor2);
    document.getElementById('id-display').innerText = valor2 + valor;
}
function limpiarDisplay() {
    document.getElementById('id-display').innerText = "";
}
function recibirValor(valor) {
    console.log(valor);
    this.num1 = valor;
    console.log(num1);
}
function recibirValor2(valor) {
    console.log(valor);
    this.num2 = valor;
    console.log(num2);
}   
function recibirOperacion(operacion) {
    console.log(operacion);
    this.operacion = operacion;
    console.log(operacion);
}
function sumar() {
    recibirOperacion("+");
    let valort = document.getElementById('id-display').innerText;
    console.log(valort);
    document.getElementById('id-display').innerText = valort + "+";
   
}
function ponerValor(){
    if(this.operacion == null){
        recibirValor(document.getElementById('id-display').innerText);
    }else{
        recibirValor2(document.getElementById('id-display').innerText);
    }
}
function calcular() {
    let resultado = 0;
    switch (this.operacion) {
        case "+":
            resultado = parseInt(this.num1) + parseInt(this.num2);
            break;
        case "-":
            resultado = parseInt(this.num1) - parseInt(this.num2);
            break;
        case "*":
            resultado = parseInt(this.num1) * parseInt(this.num2);
            break;
        case "/":
            resultado = parseInt(this.num1) / parseInt(this.num2);
            break;
    }
    document.getElementById('id-display').innerText = resultado;
}