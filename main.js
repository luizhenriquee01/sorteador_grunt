document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('form-sorteador')
    .addEventListener('submit', function () {
      let numeroMaximo = document.getElementById('numero-maximo').value;
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.random() * numeroAleatorio;

      alert(numeroAleatorio);
    });
});
