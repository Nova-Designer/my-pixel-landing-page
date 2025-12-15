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

        // Random scale (1.0 to 2.0 times the base CSS font-size)
        const scale = Math.random() * 1.0 + 1.0; 
        // Apply scale transform to the whole snowflake element
        snowflake.style.transform = `scale(${scale})`;

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
