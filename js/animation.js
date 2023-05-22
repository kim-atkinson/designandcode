const animatedTags = document.querySelectorAll("h1, h2, h3, h4, li, p, img, svg, .grid, form, a.btn, footer");

//fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0; 
})

const fadeIn = function () {
    // look through all the animated tags and see 
    // with the getBoundingClientRect if it's in the window
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom 
        
        let delay = 0.25; 


        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation  = `fadein .75s ${delay}s both`
            delay = delay + 0.25
        } else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }
    })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
    fadeIn();
})

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
    fadeIn()
});