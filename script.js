// Array para armazenar os contadores
const counters = new Array(26).fill(0); // Contadores para as letras do alfabeto

// Função para atualizar o contador
function updateCounter(index) {
    counters[index]++;
    displayCounters();
}

// Função para exibir os contadores na página
function displayCounters() {
    const countersDiv = document.getElementById('counters');

    // Limpar os contadores antigos antes de exibir os novos
    countersDiv.innerHTML = '';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Criar contadores para as letras
    for (let i = 0; i < letters.length; i++) {
        const counterElement = document.createElement('div');
        const index = i;
        counterElement.textContent = `Contador ${letters[i]}: ${counters[index]}`;
        countersDiv.appendChild(counterElement);
    }
}

// Evento de teclado para acionar os contadores
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
        const index = key.charCodeAt(0) - 65;
        if (index >= 0 && index < counters.length) {
            updateCounter(index);
        }
    }
});

// Inicializar exibição dos contadores
displayCounters();

