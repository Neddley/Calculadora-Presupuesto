const spanPresupuesto = document.getElementById("span-presupuesto");
const spanGastos = document.getElementById("span-gastos");
const spanSaldo = document.getElementById("span-saldo");
let presupuesto = 0;
let gastos = 0;
let saldo = 0;
let arrayGastos = [];
let contenido = document.querySelector("#contenido");

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

  gastos += +precioGasto*cantidadGasto;
  spanGastos.innerHTML = gastos;

  let objGastos = {
    gasto: nombreGasto,
    valor: precioGasto,
    cantidad: cantidadGasto,
  };

  arrayGastos.push(objGastos);
  calculo();
  rescate()
};

function calculo() {
  if (presupuesto > 0 && gastos > 0) {
    saldo = presupuesto - gastos;
    spanSaldo.innerHTML = saldo;
  }
}

 function rescate() {

  console.log(arrayGastos)
  contenido.innerHTML = ''

  arrayGastos.forEach((element) => {
    let tGasto = element.gasto;
    let tValor = element.valor;
    let tCantidad = element.cantidad;

    contenido.innerHTML += `
    <tr>
      <td scope="row">${tGasto}</td>
      <td>${tValor}</td>
      <td>${tCantidad}</td>
      <td>
        <i style="cursor:pointer;" onclick="borrar(event)"><img src="assets/img/borrar.png" alt="borrar"/></i>
      </td>
    </tr>
    `;
  });
} 

function borrar(event){

  event.target.parentNode.parentNode.parentNode.remove();

}