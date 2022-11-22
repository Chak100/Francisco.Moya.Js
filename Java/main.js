let Presupuesto;
let cliente=prompt("Ingrese su nombre")
let mail = prompt("Ingrese por favor su mail");
let SolicitaPresupuesto = prompt("Desea ver nuestras opciones de menú?: \n1- Si \n2 - No");

if(SolicitaPresupuesto != 2 && SolicitaPresupuesto != "No") {
    let Menu = prompt(
        "Elegí una opción: \n1- Pizza Party. \n2 - Finger Food \n3 - Asado gourmet \n4 - Burger party \nPresioná X para finalizar.");
    while (Menu != "X" && Menu != "x") {
        switch (Menu) {
        case "1":
            alert("Usted ha elegido la opción de Pizza Party la misma tiene un valor de $1400");
            let cantidadPersonas = parseInt(prompt("Ingresa cantidad de personas"));
            if (cantidadPersonas >= 0) {
                Presupuesto = 1400*cantidadPersonas;
                alert("El monto a abonar es de $" + Presupuesto);
                } 
                break;
        case "2":
            alert("Usted ha elegido la opción de Finger Food la misma tiene un valor de $3000");
            let cantidadPersonas1 = parseInt(prompt("Ingresa cantidad de personas"));
            if (cantidadPersonas1 >= 0) {
                Presupuesto = 3000*cantidadPersonas1;
                alert("El monto a abonar es de $" + Presupuesto);
                } 
                break;
        case "3":
            alert("Usted ha elegido la opción de Asado Gourmet la misma tiene un valor de $4000");
            let cantidadPersonas2 = parseInt(prompt("Ingresa cantidad de personas"));
            if (cantidadPersonas2 >= 0) {
                Presupuesto = 4000*cantidadPersonas2;
                alert("El monto a abonar es de $" + Presupuesto);
                } 
                break;
        case "4":
            alert("Usted ha elegido la opción de Burger Party la misma tiene un valor de $2500");
            let cantidadPersonas3 = parseInt(prompt("Ingresa cantidad de personas"));
            if (cantidadPersonas3 >= 0) {
                Presupuesto = 2500*cantidadPersonas3;
                alert("El monto a abonar es de $" + Presupuesto);
            }
            break;
        default:
            alert("Opción no válida");
            
        }
        opcion = prompt(
        "Quiere elegir otra opción?: \n1- Pizza Party. \n2 - Finger Food \n3 - Asado gourmet \n4 - Burger party \nPresioná X para finalizar."
        );
        
    } 
}
//else{alert("Gracias por contactarnos")}

const menu=[ 
    { nombre: "pizza party", precio: 1500, entradas: 4, principales: 10, postre: 1}, 
    { nombre: "Finger Food", precio: 3500, entradas: 0, principales: 10, postre: 1},
    { nombre: "Asado Gourmet", precio: 4000, entradas: 4, principales: 2, postre: 1},
    { nombre: "Burger party", precio: 2500, entradas: 4, principales: 10, postre: 1},
    { nombre: "Estilo pernil", precio: 2000, entradas: 1, principales: 2, postre: 1},
]


let presupuesto2= parseInt(prompt("Ingresa cual es tu presupuesto por persona, para poder ayudarte con la mejor opción"))
;
const resultado = menu.filter ((menu) =>{
    return menu.precio <= presupuesto2})

console.log (resultado)

alert("Gracias por confiar en nuestros servicios");