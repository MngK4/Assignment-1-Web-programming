// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 1
// Author: Dang Kim Quang Minh
// ID: s3938024
// Acknowledgement: 

// Assign variables with ids
var x = document.getElementById("desktop-header");
var y = document.getElementById("desktop-main");
var z = document.getElementById("dropdown-overlay");
var u = document.getElementsById("dropdown-list");

// Add or remove hidden and appear class to elements
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
