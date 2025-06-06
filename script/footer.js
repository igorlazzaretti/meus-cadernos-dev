document.addEventListener('DOMContentLoaded', function() {
    const newsTicker = document.getElementById('newsTicker');
    const imageUrl = 'caminho-para-sua-imagem-ticker.png'; // Substitua pelo caminho da sua imagem
    const repeatCount = 20; // Quantas vezes a imagem será repetida para criar o efeito de rolagem

    // Preenche o ticker com as imagens repetidas
    for (let i = 0; i < repeatCount; i++) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Ícone de programação'; // Alt text descritivo
        newsTicker.appendChild(img);
    }

    // Duplica o conteúdo para garantir a rolagem contínua e suave
    // Sem duplicar, a animação reinicia bruscamente
    newsTicker.innerHTML += newsTicker.innerHTML;

    // Configura a velocidade da animação com base na largura do conteúdo
    // Isso é útil se você quiser ajustar a velocidade via JS
    // Mas o CSS já faz a maior parte do trabalho com 'linear' e 'infinite'
    // const tickerWidth = newsTicker.scrollWidth / 2; // Metade da largura total
    // const animationDuration = tickerWidth / 50; // Ajuste este valor para controlar a velocidade (pixels por segundo)
    // newsTicker.style.animationDuration = `${animationDuration}s`;
});