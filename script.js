function setActiveButton() {
    const currentPage = window.location.pathname.split("/").pop();
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        const page = button.getAttribute('href');
        if (page === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function toggleImages(event) {
    const image1 = document.getElementById("image1");
    const singleImage = document.getElementById("single-image");
    
    if (event.target.id === "left-arrow") {

        image1.classList.remove("hidden");
        singleImage.classList.add("hidden");
    } else if (event.target.id === "right-arrow") {

        image1.classList.add("hidden");
        singleImage.classList.remove("hidden");
    }
}

document.getElementById("left-arrow")?.addEventListener("click", toggleImages);
document.getElementById("right-arrow")?.addEventListener("click", toggleImages);

window.onload = setActiveButton;
