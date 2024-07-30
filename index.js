const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#modal-menu");
const closeButton = document.querySelector(".fa-close");
const body = document.querySelector("body");
const optionsMenu = document.querySelectorAll("#modal-menu ul li");


/**Toogle mobile menu */
function toggleMenu() {
  if (mobileMenu.classList.contains("modal-open")) {
    mobileMenu.classList.remove("modal-open"); // close the modal
    body.classList.remove("stop-scroll"); // stop site from scrolling
  } else {
    mobileMenu.classList.add("modal-open"); // open the modal
    body.classList.add("stop-scroll"); // remove scroll restriction
  }
}

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

optionsMenu.forEach((option) => {
  option.addEventListener("click", toggleMenu);
});

const articles = [
  {
    id: 1,
    image: `<img src="assets/IMG_E3706.JPG" alt="article photo">`,
    title: `Hello1: 56 Years After Biafra, Natives are still undergoing trauma`,
    story: `I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.
              I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.
              I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.
              I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.
              I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.
              I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.
              I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.`,
    uploaded_date: `10/10/2024`,
  },
  {
    id: 2,
    image: `<img src="assets/IMG_E3706.JPG" alt="article photo">`,
    title: `Hello2: 56 Years After Biafra, Natives are still undergoing trauma`,
    story: `I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.`,
    uploaded_date: `10/10/2024`,
  },
  {
    id: 3,
    image: `<img src="assets/IMG_E3706.JPG" alt="article photo">`,
    title: `Hello3: 56 Years After Biafra, Natives are still undergoing trauma`,
    story: `I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.`,
    uploaded_date: `10/10/2024`,
  },
  {
    id: 4,
    image: `<img src="assets/IMG_E3706.JPG" alt="article photo">`,
    title: `Hello4: 56 Years After Biafra, Natives are still undergoing trauma`,
    story: `I am a professional Art Journalist and Creative Director based in Nigeria. Always eager to discuss art and
              media
              broadcasting opportunities, freelancing, contractor staff.`,
    uploaded_date: `10/10/2024`,
  },
];

for (let index = 0; index < articles.length; index++) {
  const articleElement = document.querySelector(`#article${index + 1}`);

  articleElement.innerHTML = `
      <div class="picture">${articles[index].image}</div>
      <div class="overlay"></div>
      <div class="details">
        <div class="time">
          <i class="fa fa-clock-o" style="font-size:15px; color: white;"></i>
          <h5>${articles[index].uploaded_date}</h5>
        </div>
        <h3>${articles[index].title}</h3>
        <p>${articles[index].story}</p>
        <button type="button" id="view-article${index + 1}"><a href="article.html">Continue reading <i class="fa fa-arrow-right" style="font-size:10.5px; color: rgb(52, 152, 220);"></i></a></button>
      </div>
    `;
}

/** ..................................................................... */
// Article page

