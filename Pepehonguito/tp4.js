const inputA = document.getElementById("valorA");
const inputB = document.getElementById("valorB");
const salida = document.getElementById("txtResultado");

document.getElementById("btnSuma").addEventListener("click", () => {
  const res = Number(inputA.value) + Number(inputB.value);
  salida.innerHTML = "<strong>Total:</strong> " + res;
});

document.getElementById("btnResta").addEventListener("click", () => {
  const res = Number(inputA.value) - Number(inputB.value);
  salida.innerHTML = "<strong>Total:</strong> " + res;
});

document.getElementById("btnMulti").addEventListener("click", () => {
  const res = Number(inputA.value) * Number(inputB.value);
  salida.innerHTML = "<strong>Total:</strong> " + res;
});

document.getElementById("btnDiv").addEventListener("click", () => {
  const numB = Number(inputB.value);
  if (numB === 0) {
    salida.innerHTML = "<strong>Total:</strong> Error (división por cero)";
  } else {
    const res = Number(inputA.value) / numB;
    salida.innerHTML = "<strong>Total:</strong> " + res;
  }
});

document.getElementById("btnPot").addEventListener("click", () => {
  const res = Math.pow(Number(inputA.value), Number(inputB.value));
  salida.innerHTML = "<strong>Total:</strong> " + res;
});