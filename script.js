const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach((pergunta) => {
    const icone = pergunta.querySelector('.material-symbols-outlined');
    const resposta = pergunta.nextElementSibling; // o <p class="resposta"> logo abaixo

    // Adiciona o evento de clique
    pergunta.addEventListener('click', () => {
        // Alterna visibilidade da resposta
        resposta.classList.toggle('mostrar');

        // Troca o ícone (up/down)
        if (icone.textContent.trim() === 'keyboard_arrow_up') {
            icone.textContent = 'keyboard_arrow_down';
        } else {
            icone.textContent = 'keyboard_arrow_up';
        }
    });
});
