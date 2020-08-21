const tl = new TimelineMax();
gsap.registerPlugin(ScrollTrigger);

tl.from('.home-page .content-home span p', 1.7, {
	y: 300,
	skewY: 10,
	ease: 'expo.inOut',
	stagger: {
		amount:0.6
	}
})

const about1 = gsap.timeline({
	scrollTrigger: {
		trigger: '.about-page .container-first',
		start: "top center"
	}
})
.from('.about-page .container-first p.title', {
		y: 100,
		opacity: 0,
		duration: 1
})
.from('.about-page .container-first .desc', {
		y: 100,
		opacity: 0,
		duration: 1
}, "-=1")


const about2 = gsap.timeline({
	scrollTrigger: {
		trigger: '.about-page .container-second',
		start: "top center"
	}
})
.from('.about-page .container-second p.title', {
		y: 100,
		opacity: 0,
		duration: 1
})
.from('.about-page .container-second .desc', {
		y: 100,
		opacity: 0,
		duration: 1
}, "-=1")


const skill1 = gsap.timeline({
	scrollTrigger: {
		trigger: 'section.skill .container',
		start: "top center"
	}
})
.from('section.skill .container .left-content', {
		y: 100,
		opacity: 0,
		duration: 1
})
.from('section.skill .container .right-content', {
		y: 100,
		opacity: 0,
		duration: 1
}, "-=1")

const skill2 = gsap.timeline({
	scrollTrigger: {
		trigger: 'section.skill .container-second',
		start: "top bottom"
	}
})
.from('section.skill p.title-skill', {
	y: 100,
	opacity: 0,
	duration: 1
})
.from('section.skill p.desc-skill', {
	y: 100,
	opacity: 0,
	duration: 1
},"-=1")
.from('section.skill .container-second .left-content', {
		y: 100,
		opacity: 0,
		duration: 1
})
.from('section.skill .container-second .right-content', {
		y: 100,
		opacity: 0,
		duration: 1
}, "-=1")

const project = gsap.timeline({
	scrollTrigger: {
		trigger: '.project-list',
		start: "top bottom"
	}
})
.from('.project-list p.title-main', {
	y: 100,
	opacity: 0,
	duration: 1
})
.from('.project-list p.desc-project', {
	y: 100,
	opacity: 0,
	duration: 1
},"-=1")

const project2 = gsap.timeline({
	scrollTrigger: {
		trigger: '.project-list .container',
		start: "center bottom"
	}
})
.from('.project-list .brand', {
	x: -100,
	opacity: 0,
	duration: 2.5,
	stagger: 0.4
})

