// Array para armazenar os contadores
const counters = new Array(26).fill(0); // Contadores para as letras do alfabeto

// Conjunto para armazenar as teclas ativas
const activeKeys = new Set();

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

// Função para processar as teclas ativas e atualizar os contadores
function processActiveKeys() {
    activeKeys.forEach((key) => {
        const index = key.charCodeAt(0) - 65;
        if (index >= 0 && index < counters.length) {
            updateCounter(index);
        }
    });
}

// Evento de teclado para adicionar ou remover teclas ativas
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
        activeKeys.add(key);
        processActiveKeys();
    }
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
        activeKeys.delete(key);
    }
});

// Inicializar exibição dos contadores
displayCounters();
