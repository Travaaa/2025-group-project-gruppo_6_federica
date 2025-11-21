// Wait for the page to load
window.addEventListener('load', function() {
    // After 2.5 seconds, apply blur and fade effect to background
    setTimeout(function() {
        const backgroundElement = document.getElementById('foto_sfondo_inizio');
        backgroundElement.classList.add('blurred');
        
        // Show text after background starts blurring (small delay for smooth transition)
        setTimeout(function() {
            const textOverlay = document.getElementById('text-overlay');
            textOverlay.classList.add('visible');
        }, 500); // 0.5 second delay after blur starts
        
    }, 2500); // 2.5 seconds delay
});