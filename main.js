const search = document.querySelector(".search-box input");
const images = document.querySelectorAll(".img-box");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searcValue = search.value;
        let value = searcValue.toLowerCase();

        images.forEach(img => {
            if (value === img.dataset.name) {
                return img.style.display = "block";
            }
            img.style.display = "none";
        });
    }
});

search.addEventListener("keyup", () => {
    if (search.value != "") return;
    images.forEach(img => {
        img.style.display = "block";
    })
})