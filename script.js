
const scrollIndicator = document.getElementById("scrollbarindicator");

const totalHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator(){
    const scrollPercentage = (window.scrollY/totalHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + "%";
}

window.addEventListener("scroll", updateScrollIndicator);