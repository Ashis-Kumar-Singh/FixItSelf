document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("mouseover", function () {
            const mainImage = this.closest(".content").querySelector(".main-image");
            mainImage.src = this.src;
        });
    });
});
