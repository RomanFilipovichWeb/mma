const current = document.querySelector("#current");
	const imgs = document.querySelector(".imgs");
	const img = document.querySelectorAll(".imgs img");
	const opacity = 0.6;
	img[0].style.opacity = opacity;
	imgs.addEventListener("click", imgClick);
	function imgClick(e){
	img.forEach(img => (img.style.opacity = 1));
	current.src = e.target.src;
	current.classList.add("fade-in");
	setTimeout(() => current.classList.remove("fade-in"),500);
	e.target.style.opacity = opacity;
}

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		responsive:[
			{
				breakpoint: 990,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



$(document).ready(function(){
	$('.trainers').slick({
		arrows:false,
		dots:false,
		slidesToShow:5,
		responsive:[
			{
				breakpoint: 990,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});


$(function(){
	
	let header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();
	
	checkScroll(scrollOffset);
	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	})
	
	function checkScroll(scrollOffset){
		if(scrollOffset >= introH){
			header.addClass("fixed");
		}else {
			header.removeClass("fixed");
		}
	}
	
	$("#nav_toggle").on("click", function(event){
		event.preventDefault();
		
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})
	
	
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		
		$("#nav a").removeClass("active");
		$this.addClass("active");
		
		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000)
	})
	
	const modal = document.querySelector("#my-modal");
	const modalBtn = document.querySelector("#modal-btn");
	const closeBtn = document.querySelector(".close");
	
	modalBtn.addEventListener('click', openModal);
	closeBtn.addEventListener('click', closeModal);
	window.addEventListener('click', outsiteClick);
	
	function openModal() {
		modal.style.display = 'block';
	}
	
	function closeModal() {
		modal.style.display = 'none';
	}
	
	function outsiteClick(e) {
		if(e.target == modal) {
			modal.style.display = 'none';
		}
	}
	
})
