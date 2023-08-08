const toggleMenu = document.querySelector('.toggle__menu');
const headerNav = document.querySelector('.header__nav');
const drop = document.querySelectorAll('ul.header__nav a');
const alternate = document.querySelector('ul.header__nav ul.drop');

function removeActiveDrop() {
    alternate.forEach((rmv) => {
        rmv.classList.remove('open');
    })
}

toggleMenu.addEventListener('click',() =>{
    toggleMenu.classList.toggle('open');
    headerNav.classList.toggle('open');
});

drop.forEach((link) =>{
	link.addEventListener("click", () => {
		link.nextElementSibling.classList.toggle("open");
		link.querySelector("i").classList.toggle("open");
	})
}); 

alternate.forEach((link2) => {
    link2.addEventListener("click", () => {
        removeActiveDrop();
        link2.classList.add('open');
    })
})
