document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // Existing Logic: Image Click Toggle (Click-on/Click-away)
    // ----------------------------------------------------
    const heroImage = document.getElementById('heroImage');

    if (heroImage) {
        // Toggle the glow ON/OFF on the image itself
        heroImage.addEventListener('click', function(e) {
            e.stopPropagation(); 
            heroImage.classList.toggle('active');
        });

        // Turn the glow OFF when clicking anywhere else
        document.addEventListener('click', function(e) {
            if (heroImage.classList.contains('active')) {
                heroImage.classList.remove('active');
            }
        });
    }
});
