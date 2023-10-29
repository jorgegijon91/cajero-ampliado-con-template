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
const cambiarPassword = document.getElementById("cambiarPassword");

// Agrega manejadores de eventos de clic a los botones
depositarBtn.addEventListener("click", depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
cambiarPassword.addEventListener("cl")
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
    alert(`Se han depositado ${deposito.toFixed(2)} €`);
    actualizarSaldoTemplate()
  }
}

// Función para retirar saldo
function retirar() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    saldo -= retiro;
    alert(`Ha retirado ${retiro.toFixed(2)} €`);
    actualizarSaldoTemplate()
  }
}

// Función para transferir saldo
function transferir() {
  const monto = parseFloat(prompt("Ingrese la cantidad a transferir:"));
  if (isNaN(monto) || monto <= 0 || monto > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    const cuentaDestino = prompt("Ingrese el número de cuenta de destino:");
    if (!validarIBAN(cuentaDestino)) {
      alert(`La cuenta ${cuentaDestino} no es una cuenta bancaria válida`)
      return
    }
    alert(`Se han transferido ${monto.toFixed(2)} € a la cuenta ${cuentaDestino}.`);
    saldo -= monto;
    actualizarSaldoTemplate()
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
    actualizarSaldoTemplate()
  } else {
    alert("PIN incorrecto. El cajero se ha bloqueado.");
    window.location.replace("/templates/cajeroBloqueado.html");
  }
}

function cambiarPassword() {
  const nuevoPIN = prompt("Ingrese su nueva contraseña (PIN):");

  if (nuevoPIN !== null && nuevoPIN !== "") {
    PIN_CORRECTO = nuevoPIN;
    alert("Contraseña cambiada exitosamente. Su nueva contraseña es: " + PIN_CORRECTO);
  } else {
    alert("No se ha realizado ningún cambio de contraseña.");
  }
}

// Función para actualizar el saldo del usuario/a
function actualizarSaldoTemplate() {
  saldoTemplate.innerText = `${saldo} €`
}

// ES1401823620010201553856

// Función que valida si la cuenta bancaria introducida cumple con las normas y estándares internacionales
function validarIBAN(iban) {
  var expresionRegular = /^(ES\d{22})$/;
  return expresionRegular.test(iban);
}



