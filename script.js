
document.addEventListener('DOMContentLoaded', function() {
    // Get the element that wraps the main image
    const heroImage = document.getElementById('heroImage');

    if (heroImage) {
        // --- 1. Event Listener to TOGGLE the glow ON/OFF on the image itself ---
        heroImage.addEventListener('click', function(e) {
            // Stop the click from bubbling up to the document handler below
            e.stopPropagation(); 
            
            // Toggle the 'active' class (this adds the blue glow)
            heroImage.classList.toggle('active');
        });

        // --- 2. Event Listener to turn the glow OFF when clicking anywhere else ---
        document.addEventListener('click', function(e) {
            // Check if the 'active' class is currently applied
            if (heroImage.classList.contains('active')) {
                // If it is active, remove the 'active' class (this removes the blue glow)
                heroImage.classList.remove('active');
            }
            // Note: If it's not active, do nothing.
        });
    }
});
