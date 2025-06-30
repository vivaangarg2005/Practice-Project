let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampmspan = document.getElementById("ampmspan");

let is24Hour = true;
let toggle = document.getElementById("toggleFormat");
toggle.innerText = "Switch to 12 Hours Format";

toggle.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggle.innerText = is24Hour
    ? "Switch to 12 Hours Format"
    : "Switch to 24 Hours Format";
});

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = is24Hour ? hours : hours % 12 == 0 ? "12" : hours % 12;
  let ampm = currentTime.getHours() < 12 ? "AM" : "PM";
  hrs.innerText = (hours < 10 ? "0" : "") + hours;
  min.innerText = (minutes < 10 ? "0" : "") + minutes;
  sec.innerText = (seconds < 10 ? "0" : "") + seconds;

  ampmspan.innerText = is24Hour ? "" : ` ${ampm}`;
}, 1000);
