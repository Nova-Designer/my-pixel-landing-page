function checkLogin() {
    const passInput = document.getElementById('hotspotPass');
    const errorMsg = document.getElementById('loginError');
    
    // THE PASSWORD IS: KCRP2025
    if (passInput.value === "KCRP2025") {
        document.getElementById('loginOverlay').style.display = 'none';
        document.getElementById('timerBar').style.display = 'block';
        
        // Start 60 Minute Countdown
        startTimer(60 * 60); 
    } else {
        errorMsg.style.display = 'block';
        passInput.value = "";
    }
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const display = document.getElementById('countdown');
    
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            // Session expired - refresh the page to lock it again
            location.reload();
        }
    }, 1000);
}

// Optional: Main image click animation
document.getElementById('heroImage').addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});
