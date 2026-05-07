function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        clockElement.innerHTML = `${dateString} - ${timeString}`;
    }
}

setInterval(updateClock, 1000);
window.onload = updateClock;
