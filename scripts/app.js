const arrow = document.querySelector(".arrow");
const container = document.querySelector(".container")
const initialPageHeight = window.innerHeight;
let pageHeight = 0;

arrow.addEventListener("click", (e) => {
    if (pageHeight != (initialPageHeight * 3)) {
        pageHeight += initialPageHeight
        container.scrollTo(0, pageHeight);
    } else {
        pageHeight = 0;
        container.scrollTo(0, pageHeight);
    }
}
);