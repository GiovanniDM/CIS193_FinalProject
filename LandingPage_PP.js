/*
    Giovanni Munoz
    Javascript for Landing Page
*/

// In greeting rotate world images 
setInterval(function() {
    // Assign different worlds
    var world1 = "Hello 🌎!";
    var world2 = "Hello 🌏!";
    var world3 = "Hello 🌍!";

    // Assign text from h1 element
    var greeting = document.getElementById("greeting").textContent;
    
    // Rotate world image inside of h1 element 
    if (greeting === world1) {
        document.getElementById("greeting").textContent = world2;
    } else if (greeting === world2) {
        document.getElementById("greeting").textContent = world3;
    } else {
        document.getElementById("greeting").textContent = world1;
    }
    
    // Debugging
   console.log(greeting);
}, 888);

