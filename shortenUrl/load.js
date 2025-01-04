document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const timerElement = document.getElementById("timer");
    const countdownMessage = document.getElementById("countdown-message");
    let timeLeft = 120;

    startButton.addEventListener("click", function () {
        // Ẩn nút và hiển thị bộ đếm
        startButton.style.display = "none";
        countdownMessage.style.display = "none";
        timerElement.parentElement.style.display = "block";

        // Bắt đầu đếm ngược
        const countdown = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                // Redirect to the original link (simulate PHP redirect)
                window.location.href = "php/redirect.php";
            }
        }, 1000);
    });
});
