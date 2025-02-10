document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            "image": "assets/img/portfolio/work-1.png",
            "tags": ["UI/UX Design", "Web Design", "Wireframe"],
            "description": "Projet de groupe sur la refonte d'un site vitrine",
            "buttonText": "<ion-icon name=\"arrow-forward-outline\"></ion-icon>",
            "src": "https://pevansfan.github.io/site-restaurant/"
        },
        {
            "image": "assets/img/portfolio/work-2.png",
            "tags": ["UI/UX Design", "Web Design", "Wireframe"],
            "description": "Projet de groupe pour créer le jeu Shifumi",
            "buttonText": "<ion-icon name=\"arrow-forward-outline\"></ion-icon>",
            "src": "https://pevansfan.github.io/site-shifumi/"
        },
        {
            "image": "assets/img/portfolio/work-3.png",
            "tags": ["UI/UX Design", "Web Design", "Wireframe"],
            "description": "Reproduction du site Burger King",
            "buttonText": "<ion-icon name=\"arrow-forward-outline\"></ion-icon>",
            "src": "https://pevansfan.github.io/site-restaurant/"
        },
        {
            "image": "assets/img/portfolio/work-4.png",
            "tags": ["UI/UX Design", "Web Design", "Wireframe"],
            "description": "Projet de groupe pour le concours de Brief Créatif Samu Social de Paris",
            "buttonText": "<ion-icon name=\"arrow-forward-outline\"></ion-icon>",
            "src": "https://descorsiers.github.io/brief_creatif_samusocialparis/"
        },
        {
            "image": "assets/img/portfolio/work-5.png",
            "tags": ["UI/UX Design", "Web Design", "Wireframe"],
            "description": "Projet de groupe pour afficher les 10 meilleures films",
            "buttonText": "<ion-icon name=\"arrow-forward-outline\"></ion-icon>",
            "src": "https://pevansfan.github.io/site-movie/"
        },
        {
            "image": "assets/img/portfolio/work-6.png",
            "tags": ["UI/UX Design", "Web Design", "Wireframe"],
            "description": "Reproduction d'un paysage en utilisant la technique du low poly.",
            "buttonText": "<ion-icon name=\"arrow-forward-outline\"></ion-icon>",
            "src": "https://pevansfan.github.io/site-low-poly/"
        },
    ];

    const container = document.querySelector(".card-container");


    // Crée le swiper-wrapper (assure-toi que le conteneur existe déjà dans le DOM)
    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    // Générer dynamiquement les slides
    data.forEach(card => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card-portfolio");

        const img = document.createElement("img");
        img.src = card.image;
        img.alt = "Card Image";

        const tagsDiv = document.createElement("div");
        tagsDiv.classList.add("tags");

        card.tags.forEach(tag => {
            const tagElement = document.createElement("span");
            tagElement.classList.add("tag");
            tagElement.textContent = tag;
            tagsDiv.appendChild(tagElement);
        });

        const bottomSection = document.createElement("div");
        bottomSection.classList.add("bottom-section");

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = card.description;

        const button = document.createElement("a");
        button.classList.add("btn");
        button.href = card.src;
        button.target = "_blank";
        button.innerHTML = card.buttonText;

        bottomSection.appendChild(description);
        bottomSection.appendChild(button);

        cardElement.appendChild(img);
        cardElement.appendChild(tagsDiv);
        cardElement.appendChild(bottomSection);

        slide.appendChild(cardElement);
        swiperWrapper.appendChild(slide); // Ajoute la slide au swiper-wrapper
    });

    container.appendChild(swiperWrapper); // Ajoute le swiper-wrapper dans le conteneur

    let swiperCards = new Swiper(".card-container", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            600: {
                slidesPerView: 1,
            },
            968: {
                slidesPerView: 2,
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { name: "HTML & CSS", progressEndValue: 98 },
        { name: "React", progressEndValue: 60 },
        { name: "Javascript", progressEndValue: 83 },
        { name: "PHP", progressEndValue: 90 },
        { name: "MySQL", progressEndValue: 85 },
        { name: "Python", progressEndValue: 80 }
    ];

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        let circularProgress = card.querySelector(".circular-progress"),
            progressValue = card.querySelector(".progress-value");

        let progressStartValue = 0,
            progressEndValue = skills[index].progressEndValue,
            speed = 50;

        let progress = setInterval(() => {
            progressStartValue++;
            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#F4A700 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
});

// Sélectionne l'icône burger et la liste du menu
const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('.header__nav-list');

// Ajoute un événement pour ouvrir/fermer le menu burger
burgerIcon.addEventListener('click', () => {
    navList.classList.toggle('burger-active');
});



const modalViews = document.querySelectorAll('.services__modal')
modalBtns = document.querySelectorAll('.services__button')
modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const textTitle = document.querySelector('.group__title .text');
const themeText = document.getElementById('themeText');

toggle.addEventListener('click', function () {
    if (body.dataset.theme === "dark") {
        // Passer en mode clair
        body.dataset.theme = "light";
        body.style.background = 'white';
        body.style.color = 'black';
        toggle.style.color = 'black';
        textTitle.style.color = 'black';
        toggle.setAttribute('name', 'moon-outline'); // Changer l'icône
        themeText.textContent = "Passer au thème sombre";
    } else {
        // Passer en mode sombre
        body.dataset.theme = "dark";
        body.style.background = 'black';
        body.style.color = 'white';
        toggle.style.color = 'white';
        textTitle.style.color = 'white';
        toggle.setAttribute('name', 'sunny-outline'); // Changer l'icône
        themeText.textContent = "Passer au thème clair";
    }

    body.style.transition = '2s';
})

