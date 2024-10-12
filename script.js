let currentImageIndex = 0;
const images = ['images/princess.jpg', 'images/mom.jpg', 'images/dad.jpg'];
const cardImg = document.getElementById("card-img");

function updateImage() {
    cardImg.src = images[currentImageIndex];
}

document.getElementById("prevBtn").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

document.getElementById("whatsappBtn").addEventListener("click", function () {
    const card = document.querySelector(".card");

    const cardButtons = document.querySelector(".card-buttons");
    cardButtons.style.display = "none";

    html2canvas(card).then(function (canvas) {

        cardButtons.style.display = "flex";

        let image = canvas.toDataURL("image/png");

        let link = document.createElement('a');
        link.href = image;
        link.download = 'Dia-das-criancas-rebeca.png';
        link.click();

        alert("Imagem baixada! Agora, compartilhe a imagem no WhatsApp junto com este texto: 'Confira o 1º Dia das Crianças da Rebeca!'");
    });
});


document.getElementById("instagramBtn").addEventListener("click", function () {
    const card = document.querySelector(".card");

    const cardButtons = document.querySelector(".card-buttons");
    cardButtons.style.display = "none";

    html2canvas(card).then(function (canvas) {
        cardButtons.style.display = "flex";

        let image = canvas.toDataURL("image/png");

        let link = document.createElement('a');
        link.href = image;
        link.download = 'Dia-das-criancas-rebeca.png';
        link.click();

        alert("Imagem baixada! Agora, abra o Instagram e adicione a imagem nos Stories.");
    });
});

