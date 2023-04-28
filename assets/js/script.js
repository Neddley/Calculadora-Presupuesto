const spanPresupuesto = document.getElementById("span-presupuesto");
const spanGastos = document.getElementById("span-gastos");
const spanSaldo = document.getElementById("span-saldo");
let presupuesto = 0;
let gastos = 0;
let saldo = 0;
let arrayGastos = [];

$(function () {
  var $body = $(document);
  $body.bind("scroll", function () {
    // "Desactivar" el scroll horizontal
    if ($body.scrollLeft() !== 0) {
      $body.scrollLeft(0);
    }
  });
});

function keyPress(ele) {
  if (event.key === "Enter") {
    addPres();
  }
}

const addPres = (event) => {
  presupuesto = document.getElementById("input-presupuesto").value;

  if (presupuesto == "" || isNaN(presupuesto) || presupuesto <= 0) {
    alert(
      "El presupuesto no puede quedar en blanco y debe de ser un numero mayor a 0"
    );
  } else {
    document.getElementById("input-presupuesto").value = "";

    spanPresupuesto.innerHTML = presupuesto;

    calculo();
  }
};

const addGastos = (event) => {
  const nombreGasto = document.getElementById("input-gasto").value;
  const precioGasto = document.getElementById("input-monto").value;
  const cantidadGasto = document.getElementById("input-cantidad").value;

  document.getElementById("input-gasto").value = "";
  document.getElementById("input-monto").value = "";
  document.getElementById("input-cantidad").value = "";

  gastos += +precioGasto;
  spanGastos.innerHTML = gastos;

  let objGastos = {
    gasto: nombreGasto,
    valor: precioGasto,
    cantidad: cantidadGasto,
  };

  arrayGastos.push(objGastos);
  console.log(arrayGastos)
  calculo();
  rescate();
};

function calculo() {
  if (presupuesto > 0 && gastos > 0) {
    console.log("aqui estoy");
    saldo = presupuesto - gastos;
    spanSaldo.innerHTML = saldo;
  }
}

function rescate(){
  arrayGastos.forEach(element => {
    let tGasto = element.gasto
    let tValor = element.valor
    let tCantidad = element.cantidad
    console.log(tGasto + tValor + tCantidad)
  });
}

/* function tablaGen(){
    let hilera = document.createElement("tr");
    for (let i=0; i=arrayGastos.length;i++){
        let celda = document.createElement("td");
        let textoCelda = document.createTextNode("texto");
    }
} */
