// Add JavaScript code here
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                robotoSlab: ['Roboto Slab', 'serif'],
                openSans: ['Open Sans', 'sans-serif'],
                montseratt: ['Montserrat', 'sans-serif']
            },
        }
    }
}

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

document.querySelectorAll("[data-priceButton]").forEach(button => {
    button.addEventListener("click", function (e) {
        first.classList.add("-translate-x-[100%]");
        second.classList.add("-translate-x-[100%]");
        third.classList.add("-translate-x-[100%]");

        document.querySelectorAll("[data-skillCard]").forEach((card, i) => {
            card.classList.add(`stagger`);
        })
    })
})

document.querySelectorAll("[data-skillButton]").forEach(button => {
    button.addEventListener("click", function (e) {
        first.classList.add("-translate-x-[200%]");
        second.classList.add("-translate-x-[200%]");
        third.classList.add("-translate-x-[200%]");

        document.querySelectorAll("[data-quizCard]").forEach((card, i) => {
            card.classList.add(`fadeInRight`);
        })

        document.querySelectorAll("[data-quizContent]").forEach((card, i) => {
            card.classList.add(`fadeIn`);
        })
    })
})