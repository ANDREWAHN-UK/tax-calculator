
// this function is used to navigate between the sections
function selectPage(page){
    document.getElementById("section-one").style.display = page === 'one' ? "flex" : "none";
    document.getElementById("section-two").style.display = page === 'two' ? "flex" : "none";
    document.getElementById("section-three").style.display = page === 'three' ? "flex" : "none";
// lines 8-28 are from swiper.js
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};

// click functionality for section 3
document.querySelectorAll('.overlay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change');
    });
});

// this makes so that when the website loads,  the modal loads
window.addEventListener('load', (event) => {
    document.getElementById("ModalOne").style.display = "block";
});

// When the user clicks on the next or previous buttons, open the modals in sequence. Also works when the relevant span (x) of the modal is clicked

function selectModal(modal){
    document.getElementById("ModalOne").style.display = modal === 'one' ? "block" : "none";
    document.getElementById("ModalTwo").style.display = modal === 'two' ? "block" : "none";
    document.getElementById("ModalThree").style.display = modal === 'three' ? "block" : "none";
};

// Get the modals
let modal1 = document.getElementById("ModalOne");
let modal2 = document.getElementById("ModalTwo");
let modal3 = document.getElementById("ModalThree");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal1.style.display = "none";
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
};

function checkForm() {
    let inputGross = document.getElementById("grossIncome").value;
    if (inputGross === "") {
        alert("Please enter a gross value");
    } else {
        modal3.style.display = "flex";
    }
}