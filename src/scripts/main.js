// Main
$(document).ready(function () {
	$('.home_slider .owl-carousel').owlCarousel({
	loop:false,
	margin:0,
	nav:false,
	items:1,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
})
	$('.home_clients .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		items:1,
		dots:false,
		navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		}
	})
})
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});