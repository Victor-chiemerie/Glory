const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const closeButton = document.querySelector('#close-button');
const optionsMenu = document.querySelectorAll('#mobile-menu ul li');
const backGroundPicture = document.querySelector('#picture');

/**Scroll indicator */
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

/**Toogle mobile menu */
function toggleMenu() {
    mobileMenu.classList.toggle('hide');
}

hamburger.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

optionsMenu.forEach((option) => {
    option.addEventListener('click', toggleMenu);
});

// An array of image URLs that you want to cycle through
var photos = [
    'assets/deborah.jpg',
    'assets/IMG_3842.JPG',
    'assets/IMG_E3706.JPG',
    'assets/IMG_E3708.JPG'
    // Add more image URLs as needed
  ];
  
  /** Function to change the background image */
  function changeBackgroundImage() {
    // Get a random index from the images array
    var randomIndex = Math.floor(Math.random() * photos.length);
  
    // Set the background image using the selected URL
    backGroundPicture.style.backgroundImage = 'url(' + photos[randomIndex] + ')';
  }
  
  // Call the function initially to set the background image
  changeBackgroundImage();
  
  // Set up the interval to change the background image every 5 seconds (5000 milliseconds)
  var intervalId = setInterval(changeBackgroundImage, 5000);


