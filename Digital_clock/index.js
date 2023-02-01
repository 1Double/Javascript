let counter = 0;
const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", () => {
    counter++;
    console.log(counter);
});

setInterval ( ()=> {
    const time = document.querySelector("#time");
    let date = new Date();;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "";
    if (counter % 2 == 0) {
        if (hours > 12) {
            day_night = "PM";
            hours = Math.abs(hours - 12);
        } else if (hours == 12) {
            day_night = "PM";
        } else if (hours == 0) {
            day_night = "AM";
            hours = hours + 12;
        } else {
            day_night = "AM";
        }
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
} );