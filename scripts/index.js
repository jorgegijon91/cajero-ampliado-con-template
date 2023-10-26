let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

// Obtén referencias a los elementos del menú por sus identificadores
const consultarSaldoBtn = document.getElementById("consultarSaldo");
const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const transferirBtn = document.getElementById("transferir");
const salirBtn = document.getElementById("salir");
const saldoTempleta = document.getElementById("saldo");

// Agrega manejadores de eventos de clic a los botones
consultarSaldoBtn.addEventListener("click", mostrarSaldo);
depositarBtn.addEventListener("click", depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
salirBtn.addEventListener("click", () => {
  console.log("Gracias por utilizar el cajero. ¡Hasta luego!");
});

function mostrarSaldo() {
  alert(`Su saldo actual es $${saldo.toFixed(2)}`);
}

function depositar() {
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (isNaN(deposito) || deposito <= 0) {
    alert("Cantidad inválida. Intente de nuevo.");
  } else {
    saldo += deposito;
    alert(`Se han depositado $${deposito.toFixed(2)}.`);
    mostrarSaldo();
  }
}

function retirar() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    saldo -= retiro;
    alert(`Ha retirado $${retiro.toFixed(2)}.`);
    mostrarSaldo();
  }
}

function transferir() {
  const monto = parseFloat(prompt("Ingrese la cantidad a transferir:"));
  if (isNaN(monto) || monto <= 0 || monto > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    const cuentaDestino = prompt("Ingrese el número de cuenta de destino:");
    console.log(`Se han transferido $${monto.toFixed(2)} a la cuenta ${cuentaDestino}.`);
    saldo -= monto;
    mostrarSaldo();
  }
}

function iniciarSesion() {
  let pin = prompt("Ingrese su PIN:");
  while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--;
    console.log(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`);
    pin = prompt("Ingrese su PIN:");
  }

  if (pin === PIN_CORRECTO) {
    alert("Inicio de sesión exitoso.");
    mostrarSaldo();
    operacionesCajero();
  } else {
    alert("PIN incorrecto. El cajero se ha bloqueado.");
  }
}

window.addEventListener("load", iniciarSesion);

