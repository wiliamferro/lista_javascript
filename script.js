document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var count = 10; // Defina o tempo inicial da contagem regressiva em segundos
  
    function updateCountdown() {
      countdownElement.textContent = count;
      count--;
  
      if (count < 0) {
        clearInterval(interval);
        countdownElement.textContent = "Fim da contagem!";
      }
    }
  
    updateCountdown();
    var interval = setInterval(updateCountdown, 1000);
  });