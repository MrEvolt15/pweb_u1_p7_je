const cambiarColor = (idelemento, color) =>{
    document.getElementById(idelemento).style.color=color;
}
const cambiarTamanio = (idelemento, tamanio) =>{
    document.getElementById(idelemento).style.fontSize=tamanio;
}
const cambiarTexto = (idelemento, valor) =>{
    document.getElementById(idelemento).innerText=valor;
}
const agregarElemento = (idelemento, elementoHTML) =>{
    document.getElementById(idelemento).innerHTML=document.getElementById(idelemento).innerHTML+elementoHTML;
}


const conceptojs = () =>{
    /*Tipos de variables en JS
    var: globales, ya no se usa, esta deprecado
    let: locales, solo en el bloque donde se declaran {}, no permite redeclarar en el mismo bloque
    const: variable cuyo valor no cambia
     */
    let nombre = "Joel";
    let numero = 10;
    let decimal = 10.5;
    const pi = 3.1416;

    console.log("Nombre: "+nombre);
    console.log("Numero: "+numero);
    console.log("Decimal: "+decimal);
    console.log("PI: "+pi);
    console.log("Entro al metodo conceptojs");

    /* Declaracion de arreglos */

    const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diaSemana);
    console.log(diaSemana[0]);
    console.log(diaSemana[1]);
    console.log(diaSemana[4]);  

    console.log(diaSemana[5]); //undefined, el concepto de null no existe en JS
    //null !== undefined
    
    let valor = null;
    console.log(valor);
    // console.log(valor1); 

    /*Para operaciones usar
        !==
        ===
    */

    //push guarda al final del arreglo
    diaSemana.push("Sabado");
    console.log(diaSemana);

    //unshift guarda al inicio del arreglo
    diaSemana.unshift("Domingo");
    console.log(diaSemana);

    const numerosImpares = [1,3,5,7,9,11];
    console.log(numerosImpares);

    const numerosPares = [2,4,6,8,10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for(const dia of diaSemana){
       console.log(dia);
       if(dia === "Viernes"){
           console.log("Alfin es viernes");
       }else{
           console.log("Aun no es viernes");
       }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: "Joel",
        apellido: "Espinosa",
        edad: 26,
        genero: "masculino",
        universidad: "UCE"
    }
    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.apellido);

    if(miEstudiante.edad >= 18){
        console.log("Es mayor de edad");
    }
    miEstudiante.apellido = "Gonzales";
    console.log(miEstudiante);

    //declaracion de atributos pero como objetos
    const miProfesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad:null,
        direccion: {
            calle: "Av. 12 de Octubre",
            numero: 1234,
            ciudad: "Quito"
        }
    }
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.ciudad);

    miProfesor.direccion.ciudad = "Guayaquil";
    console.log(miProfesor);

    console.log(miProfesor.estatura);

    if(miProfesor.edad === miProfesor.estatura){
        console.log("Son iguales");
    }else{
        console.log("Son diferentes");
    }
}