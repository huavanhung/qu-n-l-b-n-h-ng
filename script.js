const form = document.getElementById('loginForm');

let colors = ["#ff9a9e", "#fad0c4", "#a1c4fd", "#c2e9fb"];
let currentIndex = 0;

function changeBackground() {
    form.style.background = `linear-gradient(45deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackground, 2000); // Thay đổi màu mỗi 2 giây