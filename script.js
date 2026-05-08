document.addEventListener('DOMContentLoaded', function() {
    const weddingDate = new Date('2026-06-26T22:00:00Z'); // 27 juni 00:00 Amsterdam (CEST = UTC+2)
    const countdownSection = document.getElementById('countdown');
    const aftermovieSection = document.getElementById('aftermovie');

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            if (countdownSection) countdownSection.style.display = 'none';
            if (aftermovieSection) aftermovieSection.style.display = 'block';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    if (new Date() >= weddingDate) {
        if (countdownSection) countdownSection.style.display = 'none';
        if (aftermovieSection) aftermovieSection.style.display = 'block';
    } else {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
