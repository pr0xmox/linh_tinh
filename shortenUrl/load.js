document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const timerElement = document.getElementById("timer");
    const countdownMessage = document.getElementById("countdown-message");
    let timeLeft = 5;

    // Hàm để lấy giá trị của tham số từ URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Lấy giá trị của tham số `s` từ URL
    const queryParameter = getQueryParam("s");

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

                // Chuyển hướng đến reallink với giá trị của `s`
                if (queryParameter) {
                    window.location.href = "reallink?s=" + encodeURIComponent(queryParameter);
                } else {
                    alert("Missing parameter 's' in the URL.");
                }
            }
        }, 1000);
    });
});
