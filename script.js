/* c:\Users\TomLinnenbank\Github\LowieenRosa\lowieenrosa\script.js */
document.addEventListener('DOMContentLoaded', function() {
    // De trouwdatum (jaar, maand-1, dag)
    const weddingDate = new Date(2026, 5, 26); // Maanden zijn 0-based, dus 5 = juni
    const currentDate = new Date();

    // Toon de 'aftermovie' sectie als de trouwdatum is geweest.
    // Om te testen kun je de weddingDate hieronder aanpassen naar een datum in het verleden.
    // Voorbeeld: const weddingDate = new Date(2023, 0, 1);
    if (currentDate > weddingDate) {
        const aftermovieSection = document.getElementById('aftermovie');
        if (aftermovieSection) {
            aftermovieSection.style.display = 'block';
        }
    }
});
