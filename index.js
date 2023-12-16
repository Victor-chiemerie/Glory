document.addEventListener("DOMContentLoaded", function() {
    // Get the vertical bar element
    var verticalBar = document.getElementById("vertical-bar");

    // Listen for the scroll event on the window
    window.addEventListener("scroll", function() {
        // Calculate the height of the vertical bar based on the scroll position
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrolled = (window.scrollY / scrollHeight) * 100;

        // Set the height of the vertical bar
        verticalBar.style.height = scrolled + "%";
    });
});