window.sr = ScrollReveal({ reset: false });
window.sr = new ScrollReveal({ mobile: false });
sr.reveal('.img-thumbnail', {
	duration: 2000,
	origin: 'top',
	delay: 100,
});
sr.reveal('.reviews', {
	duration: 2000,
	origin: 'bottom',
});

sr.reveal('#iconReveal1', {
	duration: 1000,
	delay: 0,
});

sr.reveal('#iconReveal2', {
	duration: 1000,
	delay: 100,
});

sr.reveal('#iconReveal3', {
	duration: 1000,
	delay: 200,
});

sr.reveal('#iconReveal4', {
	duration: 1000,
	delay: 300,
});

sr.reveal(
	'.hovereffect',
	{
		duration: 2000,
	},
	100
);
sr.reveal('.title', {
	duration: 1000,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('.content', {
	duration: 1000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('#aD-1', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('#aD-2', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
});

$(function() {
	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top,
					},
					1000
				);
				return false;
			}
		}
	});
});

$('.carousel').carousel({
	interval: 1000 * 4,
});
