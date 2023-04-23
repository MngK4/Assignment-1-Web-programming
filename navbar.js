var x = document.getElementById("desktop-header");
var y = document.getElementById("desktop-main");
var z = document.getElementById("dropdown-overlay");
var u = document.getElementsById("dropdown-list")

function menuOn() {
    x.classList.add("hidden");
    y.classList.add("hidden");
    z.classList.add("appear");
    u.classList.add("appear");
}

function menuOff()  {
    x.classList.remove("hidden");
    y.classList.remove("hidden");
    z.classList.remove("appear");
    u.classList.remove("appear");
}
