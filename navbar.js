var x = document.getElementById("desktop-header");
var y = document.getElementById("desktop-main");
var z = document.getElementById("dropdown-overlay");

var img1 = document.getElementById("default-img")
var img2 = document.getElementById("book-img-2")
var img3 = document.getElementById("book-img-3")

function menuOn() {
    x.classList.add("hidden");
    y.classList.add("hidden");
    z.classList.add("appear");
}

function menuOff()  {
    x.classList.remove("hidden");
    y.classList.remove("hidden");
    z.classList.remove("appear");
}
