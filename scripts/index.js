/**
 * Autor: Diego Alonso Molina (Full Stack Developer)
 * GitHub: 
 */

// Llamada a iniciarSesion para comenzar la app web
window.addEventListener("load", iniciarSesion);

// Declaración e inicialización de variables de scope global
let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

// Obtén referencias a los elementos del menú por sus identificadores
const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const transferirBtn = document.getElementById("transferir");
const salirBtn = document.getElementById("salir");
const saldoTemplate = document.getElementById("saldo");

// Agrega manejadores de eventos de clic a los botones
depositarBtn.addEventListener("click", depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
salirBtn.addEventListener("click", () => {
  alert("Gracias por utilizar el cajero. ¡Hasta luego!");
  window.location.replace("/templates/despedidaCajero.html");
});

// Función para depositar saldo
function depositar() {
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (isNaN(deposito) || deposito <= 0) {
    alert("Cantidad inválida. Intente de nuevo.");
  } else {
    saldo += deposito;
    alert(`Se han depositado $${deposito.toFixed(2)}.`);
  }
}

// Función para retirar saldo
function retirar() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    saldo -= retiro;
    alert(`Ha retirado $${retiro.toFixed(2)}.`);
  }
}

// Función para transferir saldo
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

// Función para iniciar sesión
function iniciarSesion() {
  let pin = prompt("Ingrese su PIN:");
  while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--;
    alert(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`);
    pin = prompt("Ingrese su PIN:");
  }

  if (pin === PIN_CORRECTO) {
    alert("Inicio de sesión exitoso.");
    saldoTemplate.ine
  } else {
    alert("PIN incorrecto. El cajero se ha bloqueado.");
    window.location.replace("/templates/cajeroBloqueado.html");
  }
}



