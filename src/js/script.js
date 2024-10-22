document.addEventListener('DOMContentLoaded', () => {
    const rsvpButton = document.getElementById('rsvpButton');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const invitationContainer = document.getElementById('invitationContainer');

    rsvpButton.addEventListener('click', () => {
        confirmationMessage.classList.remove('hidden');
    });

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        invitationContainer.appendChild(firework);
        
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.backgroundColor = getRandomColor();

        setTimeout(() => {
            firework.remove();
        }, 1000); // Remove o elemento após a animação de explosão
    }

    function getRandomColor() {
        const colors = ['#ff69b4', '#ffd700', '#4caf50', '#2196f3', '#ff5722'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createFirework, 50); // Cria um fogo de artifício a cada 5 ms
});
