// creates variables and assigned html classes to them
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() { // function that constantly updates the clock
    const currentDate = new Date(); // creates variable currentDate and assigned new Date to it
    // setTimeout(updateClock, 1000);
    const hour = currentDate.getHours(); // extracts current hours
    const minute = currentDate.getMinutes(); // extracts current minutes
    const second = currentDate.getSeconds(); // extracts current seconds
    const hourDeg = (hour / 12) * 360; // calculates degrees of rotation for hour
    hourEl.style.transform = `rotate(${hourDeg}deg)`; // sets rotation to appropriate amount of degrees and inserts the calculated value
    const minuteDeg = (minute / 60) * 360; // calculates degrees of rotation for minute
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`; // sets rotation to appropriate amount of degrees and inserts the calculated value
    const secondDeg = (second / 60) * 360; // calculates degrees of rotation for second
    secondEl.style.transform = `rotate(${secondDeg}deg)`; // sets rotation to appropriate amount of degrees and inserts the calculated value
}
setInterval(updateClock, 1000);

// updateClock();
