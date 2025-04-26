function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").innerText = now.toLocaleDateString('en-US', options);
    
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById("current-time").innerText = now.toLocaleTimeString('en-US', timeOptions);
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
