// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Scroll Up to Top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Video Pop-up
function videoPopup() {
  const videoBox = document.querySelector(".hero__video-pop");
  videoBox.classList.toggle("showVideo");
  const iframe = document.querySelector(".responsive-iframe");
  if (iframe !== null) {
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
}
