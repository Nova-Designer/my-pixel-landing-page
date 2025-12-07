document.addEventListener('DOMContentLoaded', function() {
    // Get the element that wraps the main image
    const heroImage = document.getElementById('heroImage');

    if (heroImage) {
        // Add an event listener for when the wrapper is clicked or tapped
        heroImage.addEventListener('mousedown', function() {
            // Add the 'active' class to trigger the CSS animation
            heroImage.classList.add('active');
        });
        
        // Add an event listener for when the click/tap is released
        heroImage.addEventListener('mouseup', function() {
            // Remove the 'active' class to revert the animation
            heroImage.classList.remove('active');
        });

        // Also handle touch events for mobile phones (tap and release)
        heroImage.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent default mobile behavior like scrolling
            heroImage.classList.add('active');
        }, false);
        
        heroImage.addEventListener('touchend', function(e) {
            e.preventDefault();
            heroImage.classList.remove('active');
        }, false);
    }
});
