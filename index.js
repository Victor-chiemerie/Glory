document.addEventListener("DOMContentLoaded", function() {
    // Get all circle elements
    var circles = document.querySelectorAll(".circle");

    // Listen for the scroll event on the window
    window.addEventListener("scroll", function() {
        // Calculate the height of each section based on the number of circles
        var sectionHeight = document.documentElement.scrollHeight / circles.length;

        // Calculate the current section based on the scroll position
        var currentSection = Math.floor(window.scrollY / sectionHeight);

        // Check if the user has reached the bottom of the page
        var isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

        // Loop through each circle and update its background color
        circles.forEach(function(circle, index) {
            if (isAtBottom || index <= currentSection) {
                circle.style.backgroundColor = "black"; /* Activate color for current and previous circles, or all circles if at the bottom */
            } else {
                circle.style.backgroundColor = "transparent"; /* Deactivate color for future circles */
            }
        });
    });
});
