const toggleMenu = document.querySelector('.toggle__menu');
const headerNav = document.querySelector('.header__nav');
const hNav = document.querySelectorAll('.header__nav__link');
const hContent = document.querySelectorAll('.drop');

toggleMenu.addEventListener('click', () => {
	toggleMenu.classList.toggle('open');
	headerNav.classList.toggle('open');
});

hNav.forEach((nav) => {
	nav.addEventListener('click', () => {
		removeActiveNav();
		nav.classList.toggle('active');
		nav.querySelector('i').classList.toggle('active');
		const activeContent = document.querySelector(`#${nav.id}-content`);
		removeActiveContent();
		activeContent.classList.toggle('active');
	});
});

/*----------FUNCTIONS-------------*/

function removeActiveNav() {
	hNav.forEach((nav) => {
		nav.classList.remove('active');
	});
}

function removeActiveContent() {
	hContent.forEach((nav) => {
		nav.classList.remove('active');
	});
}
