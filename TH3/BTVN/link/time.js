function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    
    document.getElementById("current-time").innerHTML = timeString;
}

function formatTime(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

setInterval(updateTime, 1000);
