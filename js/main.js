const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// When user scrolls down the page, at a certain point
// Add a class to make header white

const headerTag = doucment.querySelector("header");

const toggleHeader =  function () {
  const pixels = window.pageYOffset 

  if (pixels > 60) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled");
  }
}


toggleHeader();


document.addEventListener("scroll", function () {
  toggleHeader()
})