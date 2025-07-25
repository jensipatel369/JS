let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let start = document.querySelector("#start");
let stop1 = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let disp = document.querySelector("#disp");

let total = 0;
let interval;

function totalvalue() {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

function Timer() {
    totalvalue();
    total--;

    if (total >= 0) {
        let hr = Math.floor(total / 3600);
        let mt = Math.floor((total / 60) - (hr * 60));
        let sc = total - ((hr * 3600) + (mt * 60));

        hour.value = hr;
        minute.value = mt;
        second.value = sc;
    } else {
        clearInterval(interval);
        disp.innerText = "Time is Over!🙃";
    }
}

start.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(() => { Timer(); }, 1000);
    disp.innerText = "Timer Started😍";
});

stop1.addEventListener("click", () => {
    clearInterval(interval);
    disp.innerText = "Timer Stopped";
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    hour.value = "";
    minute.value = "";
    second.value = "";
    disp.innerText = "Timer";
});