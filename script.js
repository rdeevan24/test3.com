document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector("#Intro");
    var txt = element.innerHTML; // Get the text from the element
    element.innerHTML = ""; // Clear the text in the element to start the typing effect

    var i = 0;
    var speed = 50; // The speed/duration of the effect in milliseconds

    function typeWriter() {
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i); // Append the character at position i to the innerHTML of the element
            i++;
            setTimeout(typeWriter, speed); // Call the typeWriter function again after a delay of 'speed' milliseconds
        }
    }

    typeWriter(); // Call the function to start the typing effect
});

