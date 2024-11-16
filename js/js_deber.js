function cambiaresiloLabels(idelementos, color) {
    const label1 = idelementos[0];
    const label2 = idelementos[1];
    document.getElementById(label1).style.color = color;
    document.getElementById(label1).style.fontFamily = 'Arial, Helvetica, sans-serif';
    document.getElementById(label2).style.color = color;
    document.getElementById(label2).style.fontFamily = 'Arial, Helvetica, sans-serif';
}
function cambiarColorInputs(idelementos, color) {
    const input1 = idelementos[0];
    const input2 = idelementos[1];
    document.getElementById(input1).style.backgroundColor = color;
    document.getElementById(input2).style.backgroundColor = color;
}
function cambiarColorBody(color) {
    document.body.style.backgroundColor = color;
}
function cambiarEstiloH1(color) {
    document.getElementById('h1').style.color = color;
    document.getElementById('h1').style.fontSize = '30px';
    document.getElementById('h1').style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
}