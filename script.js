// Script para mudar a imagem do modal dinamicamente
const modalImage = document.getElementById("modalImage");

document.querySelectorAll(".card-img-top").forEach((img) => {
    img.addEventListener("click", () => {
        const imageSrc = img.getAttribute("data-bs-img");
        modalImage.src = imageSrc;
    });
});
