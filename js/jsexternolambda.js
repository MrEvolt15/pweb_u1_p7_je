const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}
const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}
const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}
const agregarElemento = (idelemento, elementoHTML) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementoHTML;
}


const conceptojs = () => {
    /*Tipos de variables en JS
    var: globales, ya no se usa, esta deprecado
    let: locales, solo en el bloque donde se declaran {}, no permite redeclarar en el mismo bloque
    const: variable cuyo valor no cambia
     */
    let nombre = "Joel";
    let numero = 10;
    let decimal = 10.5;
    const pi = 3.1416;

    console.log("Nombre: " + nombre);
    console.log("Numero: " + numero);
    console.log("Decimal: " + decimal);
    console.log("PI: " + pi);
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

    const numerosImpares = [1, 3, 5, 7, 9, 11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diaSemana) {
        console.log(dia);
        if (dia === "Viernes") {
            console.log("Alfin es viernes");
        } else {
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

    if (miEstudiante.edad >= 18) {
        console.log("Es mayor de edad");
    }
    miEstudiante.apellido = "Gonzales";
    console.log(miEstudiante);

    //declaracion de atributos pero como objetos
    const miProfesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: null,
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

    if (miProfesor.edad === miProfesor.estatura) {
        console.log("Son iguales");
    } else {
        console.log("Son diferentes");
    }

    //arreglo de objetos

    const est1 = {
        nombre: "Joel",
        apellido: "Espinosa",
        edad: 26
    }
    const est2 = {
        nombre: "Juanito",
        apellido: "Bizcarra",
        edad: 30
    }
    const est3 = {
        nombre: "Maria",
        apellido: "Perez",
        edad: 22
    }
    const arregloEstudiantes = [est1, est2, est3];
    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstudiantes2 = [
        {
            nombre: "Joel",
            apellido: "Espinosa",
            edad: 26
        },
        {
            nombre: "Juanito",
            apellido: "Bizcarra",
            edad: 30
        },
        {
            nombre: "Maria",
            apellido: "Perez",
            edad: 22
        }
    ]
    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);

    //uso del pop
    console.log("Uso del pop");
    const estudainte = arregloEstudiantes2.pop();
    console.log(estudainte);

    console.table(arregloEstudiantes2);

    //Desestructuracion de arreglos
    const colores = ["rojo", "verde", "azul", "amarillo", "blanco"];
    const [c1, c2, c3, c4, c5] = colores;

    console.log(c1);
    console.log(c5);
    console.log(c3);

    const [, m2, , , m5] = ["enero", "febrero", "marzo", "abril", "mayo"];
    console.log(m2);
    console.log(m5);

    //Desestructuracion de objetos
    console.log("Desestructuracion de objetos");
    const automovil = {
        marca: "Chevrolet",
        modelo: "Spark",
        anio: 2020,
        color: "rojo"
    }
    const { marca, modelo, anio, color } = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

    const automovil2 = {
        marca: "Chevrolet",
        modelo: "Spark",
        anio: 2020,
        color: "rojo"
    }
    /*
    const {marca, modelo, anio, color} = automovil2;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
    */
    Desestructuracion(automovil2);

    const {nombreP,raza,estatura}={nombreP:"Black",raza:"Pastor Aleman",estatura:1.5};
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //declaren un objeto con un atributo complejo (con un atributo de tipo objeto) y desestructurar el atributo complejo
    const universidad = {
        nombreI: "UCE",
        estudiantes:100000000,
        rector: {
            nombreR: "NombreR",
            apellido: "ApellidoR"
        }
    }
    /*
    const { estudiantes, rector} = universidad;
    const {nombreR, apellido} = rector;
    console.log(nombreR);
    */
   const {estudiantes, rector:{nombreR, apellido}} = universidad;
   console.log(nombreR);
   console.log(apellido);
}

//const desestructuracion = (automovil) => {
const Desestructuracion = ({ marca, modelo, anio, color }) => {
    console.log("Desestructuracion de objetos");
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}