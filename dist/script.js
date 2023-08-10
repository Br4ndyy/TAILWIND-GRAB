const toggleMenu = document.querySelector('.toggle__menu');
const headerNav = document.querySelector('.header__nav');
const hNav = document.querySelectorAll('.header__nav__link');
const hContent = document.querySelectorAll('.drop');
const sch = document.querySelector('.search');
const pdrop = document.querySelector('.p__drop');
const pdropdown = document.querySelector('.p__dropdown');

pdrop.addEventListener('click', () => {
	pdrop.classList.toggle('.open');
	pdropdown.classList.toggle('open');
	pdrop.querySelector('i').classList.toggle('open');
});

toggleMenu.addEventListener('click', () => {
	toggleMenu.classList.toggle('open');
	headerNav.classList.toggle('open');
});

sch.addEventListener('click', () => {
	sch.classList.toggle('open');
});

hNav.forEach((nav) => {
	nav.addEventListener('click', () => {
		if (nav.classList.contains('active')) {
			removeActiveNav();
			removeActiveContent();
		} else {
			removeActiveNav();
			nav.classList.toggle('active');
			nav.querySelector('i').classList.toggle('active');
			const activeContent = document.querySelector(`#${nav.id}-content`);
			removeActiveContent();
			activeContent.classList.toggle('active');
		}
	});
});

hContent.forEach((content) => {
	content.addEventListener('click', () => {
		removeActiveContent();
	});
});

/*----------FUNCTIONS-------------*/

function removeActiveNav() {
	hNav.forEach((nav) => {
		nav.classList.remove('active');
		nav.querySelector('i').classList.remove('active');
	});
}

function removeActiveContent() {
	hContent.forEach((content) => {
		content.classList.remove('active');
	});
}

