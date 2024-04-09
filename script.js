// Toggle Switch
const toggleSwitch = document.getElementById("toggle-switch");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});


// Text Carousel 
const scroller = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation()
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
    })
}