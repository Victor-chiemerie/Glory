const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobile-menu");
const closeButton = document.querySelector("#close-button");
const optionsMenu = document.querySelectorAll("#mobile-menu ul li");
const backGroundPicture = document.querySelector("#picture");
const seeButton = document.querySelector(".see");
const loading = document.querySelector(".loading");

/**Scroll indicator */
document.addEventListener("DOMContentLoaded", function () {
  // Get all circle elements
  var circles = document.querySelectorAll(".circle");

  // Listen for the scroll event on the window
  window.addEventListener("scroll", function () {
    // Calculate the height of each section based on the number of circles
    var sectionHeight = document.documentElement.scrollHeight / circles.length;

    // Calculate the current section based on the scroll position
    var currentSection = Math.floor(window.scrollY / sectionHeight);

    // Check if the user has reached the bottom of the page
    var isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    // Loop through each circle and update its background color
    circles.forEach(function (circle, index) {
      if (isAtBottom || index <= currentSection) {
        circle.style.backgroundColor =
          "black"; /* Activate color for current and previous circles, or all circles if at the bottom */
      } else {
        circle.style.backgroundColor =
          "transparent"; /* Deactivate color for future circles */
      }
    });
  });
});

/**Toogle mobile menu */
function toggleMenu() {
  mobileMenu.classList.toggle("hide");
}

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

optionsMenu.forEach((option) => {
  option.addEventListener("click", toggleMenu);
});

// An array of image URLs that you want to cycle through
var photos = [
  "assets/deborah.jpg",
  "assets/IMG_3842.JPG",
  "assets/IMG_E3706.JPG",
  "assets/IMG_E3708.JPG",
  // Add more image URLs as needed
];

/**Changes the background image automatically */
function changeBackgroundImage() {
  // Get a random index from the images array
  var randomIndex = Math.floor(Math.random() * photos.length);

  // Set the background image using the selected URL
  backGroundPicture.style.backgroundImage = "url(" + photos[randomIndex] + ")";
}

// Call the function initially to set the background image
changeBackgroundImage();

// Set up the interval to change the background image every 5 seconds (5000 milliseconds)
var intervalId = setInterval(changeBackgroundImage, 5000);

const articles = [
  {
    id: 1,
    display: `<video loop controls src="assets/test video.mp4"></video>`,
    title: `War Effects: 56 Years After Biafra, Natives Are Still Undergoing Trauma hello`,
    story: `Glory Nwadinigwe is an independent journalist whose works has centered
                around the arts and creative news. She writes on various topic ranges
                from music, news, arts,culture, fashion,lifestyle and people. Has a huge
                curiosity and passion for storytelling. Explores the future and past of
                contemporary art and technology, brings imaginative inspiration to life
                using films. Always eager to discuss art and media broadcasting
                opportunities, freelancing, contract or staff.
                <br /><br />Based on Nigeria <br />Portfolio is a selection of features
                <br />Thanks for viewing!. Glory Nwadinigwe is an independent journalist
                whose works has centered around the arts and creative news. She writes
                on various topic ranges from music, news, arts,culture,
                fashion,lifestyle and people. Has a huge curiosity and passion for
                storytelling. Explores the future and past of contemporary art and
                technology, brings imaginative inspiration to life using films. Always
                eager to discuss art and media broadcasting opportunities, freelancing,
                contract or staff. <br /><br />Based on Nigeria <br />Portfolio is a
                selection of features <br />Thanks for viewing!. Glory Nwadinigwe is an
                independent journalist whose works has centered around the arts and
                creative news. She writes on various topic ranges from music, news,
                arts,culture, fashion,lifestyle and people. Has a huge curiosity and
                passion for storytelling. Explores the future and past of contemporary
                art and technology, brings imaginative inspiration to life using films.
                Always eager to discuss art and media broadcasting opportunities,
                freelancing, contract or staff. <br /><br />Based on Nigeria
                <br />Portfolio is a selection of features <br />Thanks for viewing!.
                Glory Nwadinigwe is an independent journalist whose works has centered
                around the arts and creative news. She writes on various topic ranges
                from music, news, arts,culture, fashion,lifestyle and people. Has a huge
                curiosity and passion for storytelling. Explores the future and past of
                contemporary art and technology, brings imaginative inspiration to life
                using films. Always eager to discuss art and media broadcasting
                opportunities, freelancing, contract or staff. <br /><br />Based on
                Nigeria <br />Portfolio is a selection of features <br />Thanks for
                viewing!. Glory Nwadinigwe is an independent journalist whose works has
                centered around the arts and creative news. She writes on various topic
                ranges from music, news, arts,culture, fashion,lifestyle and people. Has
                a huge curiosity and passion for storytelling. Explores the future and
                past of contemporary art and technology, brings imaginative inspiration
                to life using films. Always eager to discuss art and media broadcasting
                opportunities, freelancing, contract or staff. <br />Based on Nigeria
                <br />Portfolio is a selection of features <br />Thanks for viewing!.`,
    date: `10/10/23`,
    author: `By Glory Nwadinigwe`,
  },
  {
    id: 2,
    display: `<img src="assets/War effects.jpg" alt="imaginative" />`,
    title: `War Effects: 56 Years After Biafra, Natives Are Still Undergoing Trauma`,
    story: `The dreams of Biafra as a nation were short-lived as they fell to the hands of the Nigerian soldiers on January 14th, 1970. 
                This national crisis claimed the lives of nearly 2 million people, mostly children, out of malnutrition and starvation. The war brought about so many physical, social and ecological wreckage still faced today by natives who fought dearly for a valiant cause. 
                Looking into current day effects of the cold war, a drive through the urban poor general populace of Orlu, one of the last territories to be conquered. Rose, a 64 year-old, had an agonizing narrative on her survival till this day. 
                “There’s almost nothing we get from farming and sale of crops”. She commented in native Igbo dialect. “Since the war, we’ve encountered various challenges including the Fulani herdsmen saga, banditry, and constant pointless lockdowns. Food prices tripled, making it hard for locals to survive and crippling the economy”. 
                En route, heading north towards Ideato and some Anambra communities, noticing natives middle- aged and above suffered unimaginable health problems. 56 years after fatal exposure to the famine afflicting Biafra. 
                Those who weren't amputees as a result of the fighting were either suffering from illnesses like; Increased cardiovascular diseases, obesity, high blood pressure, diabetes, arthritis and undernutrition to name a few. Smoking became regular among elderly to hide resentment and frustration. 
                Death became constant as most natives barely lived till 80. Reduced adult stature was a common sight. Okechukwu who was an elderly displaced survivor that lived in Kano alongside his family who were all murdered at the start of the war attested to evacuating raided and by conquered territories during the war. 
                “We were treated worse than outcasts, the government have refused to give us the land settlement we were promised so as to create means of livelihood for ourselves and our families” he shook as he lamented. 
                With gloomy faces and void expressions, you could tell who lived through the deadly war and saw it all. Many suffered from physical and psychological trauma. 
                The region is still struggling to build up its infrastructure and develop its economy despite the corrupt governmental system which makes rapid social development undeniably slow. Visible damage of landscape and habitats, destruction of properties and reduction of investments, trade and daily market activities caused by the sit - at - home order leaving Igbo land materially devastated. 
                In conclusion, the Nigerian Civil War had a profound impact on the Igbo tribe. Till today, 56 years later the effects of the cold and bloody war are leaving natives impoverished, uneducated, frustrated, and poor. 
                “We made Biafra”, Rose comments, “We didn’t know if we would make it, but we hoped someday it’ll all be better and that’s what’s brought us thus far!"`,
    date: `10/10/23`,
    author: `By Glory Nwadinigwe`,
  },
  {
    id: 3,
    display: ``,
    title: ``,
    story: ``,
    date: ``,
    author: ``,
  },
];

const articleDisplay = document.getElementById('display');
const articleTitle = document.querySelector('#articles h3');
const articleStory = document.getElementById('story_line');
const articleDate = document.getElementById('date');
const articleAuthor = document.getElementById('author');
const prevArticleBtn = document.getElementById('articles-prev');
const nextArticleBtn = document.getElementById('articles-next');

// Set initial article display values
articleDisplay.innerHTML = articles[0].display;
articleTitle.innerText = articles[0].title;
articleStory.innerText = articles[0].story;
articleDate.innerText = articles[0].date;
articleAuthor.innerText = articles[0].author;


/**Toggle to either preious or next article */
const toggleArticle = (number) => {
    articleDisplay.innerHTML = articles[number].display;
    articleTitle.innerText = articles[number].title;
    articleStory.innerText = articles[number].story;
    articleDate.innerText = articles[number].date;
    articleAuthor.innerText = articles[number].author;
}

var articleNumber = 0;

/**Check when article has reached the end */
const checkArticleNumber = () => {
    if (articleNumber <= 0) {
        prevArticleBtn.style.display = 'none';
    } else {
        prevArticleBtn.style.display = 'block';
    }

    if (articleNumber >= articles.length - 1) {
        nextArticleBtn.style.display = 'none';
    } else {
        nextArticleBtn.style.display = 'block';
    }
}

checkArticleNumber();

// Switch to previous article
prevArticleBtn.addEventListener('click', () => {
    toggleArticle(articleNumber - 1);
    articleNumber--;
    checkArticleNumber();
})

// Switch to next article
nextArticleBtn.addEventListener('click', () => {
    toggleArticle(articleNumber + 1);
    articleNumber++;
    checkArticleNumber();
})

const visualWorks = [
  {
    id: 1,
    display: `<video loop controls src="assets/test video.mp4"></video>`,
  },
  {
    id: 2,
    display: `<video loop controls src="assets/test video.mp4"></video>`,
  },
  {
    id: 3,
    display: `<video loop controls src="assets/test video.mp4"></video>`,
  },
];

const visualDisplay = document.getElementById('visual_display');
const prevVisualBtn = document.getElementById('visual-prev');
const nextVisualBtn = document.getElementById('visual-next');

// Set initial visual work display values
visualDisplay.innerHTML = visualWorks[0].display;

/**Toggle to either preious or next article */
const toggleVisualWorks = (number) => {
    visualDisplay.innerHTML = visualWorks[number].display;
}

var visualWorksNumber = 0;

/**Check when visual works has reached the end */
const checkVisualWorkNumber = () => {
    if (visualWorksNumber <= 0) {
        prevVisualBtn.style.display = 'none';
    } else {
        prevVisualBtn.style.display = 'block';
    }

    if (visualWorksNumber >= visualWorks.length - 1) {
        nextVisualBtn.style.display = 'none';
    } else {
        nextVisualBtn.style.display = 'block';
    }
}

checkVisualWorkNumber();

// Switch to previous visual work
prevVisualBtn.addEventListener('click', () => {
    toggleVisualWorks(visualWorksNumber - 1);
    visualWorksNumber--;
    checkVisualWorkNumber();
})

// Switch to next visual work
nextVisualBtn.addEventListener('click', () => {
    toggleVisualWorks(visualWorksNumber + 1);
    visualWorksNumber++;
    checkVisualWorkNumber();
})

/**Pre-loading feature and Transition Effect */
document.addEventListener("DOMContentLoaded", function () {
  // Add the 'centered' class after a delay (e.g., 3 seconds)
  setTimeout(function () {
    loading.classList.add("centered");
  }, 3000);

  // Simulate a delay (you can replace this with actual loading logic)
  setTimeout(function () {
    // Hide loading screen
    document.getElementById("loading").style.display = "none";

    // Show main content
    document.querySelector(".container").style.display = "block";
  }, 5000); // Adjust the time as needed
});

/**See more or less effect */
const toggleText = () => {
  const longText = document.getElementById("story_line");

  if (longText.classList.contains("story_line")) {
    longText.classList.remove("story_line");
    seeButton.textContent = "See less";
  } else {
    longText.classList.add("story_line");
    seeButton.textContent = "See more";
  }
};

seeButton.addEventListener("click", toggleText);
