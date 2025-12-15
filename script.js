document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // 1. Image Click Toggle Logic (Click-on/Click-away)
    // ----------------------------------------------------
    const heroImage = document.getElementById('heroImage');

    if (heroImage) {
        // Toggle the glow ON/OFF on the image itself
        heroImage.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevents document click handler from running immediately
            heroImage.classList.toggle('active');
        });

        // Turn the glow OFF when clicking anywhere else
        document.addEventListener('click', function(e) {
            if (heroImage.classList.contains('active')) {
                heroImage.classList.remove('active');
            }
        });
    }

    // ----------------------------------------------------
    // 2. Animated Snowflakes Generation Logic
    // ----------------------------------------------------
    const snowContainer = document.getElementById('snow-container');
    const numberOfSnowflakes = 30; // Set how many snowflakes you want

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random starting horizontal position (0% to 100% of screen width)
        const startX = Math.random() * 100; 
        snowflake.style.left = `${startX}vw`;

        // Random size (5px to 10px)
        const size = Math.random() * 5 + 5; 
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Random animation duration (to vary falling speed: 10s to 25s)
        const duration = Math.random() * 15 + 10;
        snowflake.style.animationDuration = `${duration}s`;

        // Random delay (to start falling at different times)
        const delay = Math.random() * 20; 
        snowflake.style.animationDelay = `${delay}s`;

        snowContainer.appendChild(snowflake);

        // Reset snowflake when it finishes falling to create a continuous loop
        snowflake.addEventListener('animationiteration', () => {
             // Reset its position and speed for continuous looping
             snowflake.style.left = `${Math.random() * 100}vw`;
             snowflake.style.animationDuration = `${Math.random() * 15 + 10}s`;
        });
    }

    // Generate all the snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
});
