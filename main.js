//Smooth scroll function
//const navLinks = document.querySelectorAll("li a")
//console.log(navLinks);

const chevronBtn = document.querySelector("#header-art_chevron");
console.log(chevronBtn);
chevronBtn.addEventListener("click",smoothScroll);

function smoothScroll(event) {
    window.scroll({
        top: document.querySelector("#projects_section").offsetTop,
        behavior: "smooth"
    });
}