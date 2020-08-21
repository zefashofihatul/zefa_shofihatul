import jump from '../vendor/jumpJs/jump.js';

function jumpActivate() {

	const brandNav = document.querySelector('.logo_brand');
	const homeNav = document.querySelector('#home');
	const aboutNav = document.querySelector('#about');
	const skillNav = document.querySelector('#skill');
	const projectNav = document.querySelector('#project');
	const allNav = document.querySelectorAll('.link-page');

	window.addEventListener("scroll", (e) => {
		console.log(window.scrollY);
	})

	brandNav.addEventListener('click', function() {
		disactivateNavbar();
		jump("#page-home", {
			duration: 500,
			offset: 0,
			callback: () => {
				activateNavbar();
			},
			a11y: false
		})
	})

	homeNav.addEventListener('click', function() {
		disactivateNavbar();
		jump("#page-home", {
			duration: 500,
			offset: 0,
			callback: () => {
				activateNavbar();
			},
			a11y: false
		})
	})

	aboutNav.addEventListener('click', function() {
		disactivateNavbar();
		jump('#about-page', {
			duration: 500,
			offset: 0,
			callback: () => {
				activateNavbar();
			},
			a11y: false
		})
	})

	skillNav.addEventListener('click', function() {
		disactivateNavbar();
		jump('#skill-page', {
			duration: 500,
			offset: 0,
			callback: () => {
				activateNavbar();
			},
			a11y: false
		})
	})

	projectNav.addEventListener('click', function() {
		disactivateNavbar();
		jump('#project-page', {
			duration: 500,
			offset: 0, 
			callback: () => {
				activateNavbar();
			},
			a11y: false
		})
	})

	function disactivateNavbar() {
		allNav.forEach((slide, index) => {
			slide.style.pointerEvents = "none";
		})
	}

	function activateNavbar() {
		allNav.forEach((slide, index) => {
			slide.style.pointerEvents = "auto";
		})
	}
}

jumpActivate();

export default jumpActivate;
