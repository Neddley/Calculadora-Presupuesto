const spanPresupuesto = document.getElementById("span-presupuesto");
const spanGastos = document.getElementById("span-gastos");
const spanSaldo = document.getElementById("span-saldo")
let gastos = 0

console.log("funca")

$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Desactivar" el scroll horizontal
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

}); 

const addPres = (event) => {
    const presupuesto = document.getElementById("input-presupuesto").value;
    spanPresupuesto.innerHTML = presupuesto;
}

const addGastos = (event) =>{
    const nombreGasto = document.getElementById("input-gasto").value;
    const precioGasto = document.getElementById("input-monto").value;
    const cantidadGasto = document.getElementById("input-cantidad").value;

    
    gastos += + precioGasto

    spanGastos.innerHTML = gastos
}