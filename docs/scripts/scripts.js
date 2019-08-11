(function () {
	
	function backToTop(){
		let btn = document.getElementById('back-top');
		
		window.addEventListener('scroll', function(){
			let currOffset = window.pageYOffset;

			if(currOffset > 200){
				btn.style.display = "block";
				btn.classList.add("show");
				btn.classList.remove("hide");
			}
			else {
				if (btn.classList.contains('show')){
					btn.classList.add("hide");
					btn.classList.remove("show");
					setTimeout(() => {
						btn.style.display = "none";
					}, 200);
				}
			}
		});

		btn.addEventListener('click', function(evt){
			evt.preventDefault();
			let a = setInterval(function(){
				if (pageYOffset === 0){
					clearInterval(a);
				}
				window.scroll(0, window.pageYOffset - 50);
			}, 10);
		});
	}

	return {
		backToTop: backToTop()
	}
	// let urlHash = window.location.hash;
	// function highlightCurrentLink() {
	// 	if (urlHash.length > 0) {
	// 		$('nav ul li a[href="' + urlHash + '"]').addClass('selected');
	// 	}

	// 	$('nav ul li a').on('click', function () {
	// 		$('nav ul li a.selected').removeClass('selected');
	// 		$(this).addClass('selected');
	// 	});
	// }

	// function animateScroll() {
	// 	$('nav ul li a').click(function () {
	// 		if ($('nav ul li a[href=""')) {
	// 			$('html, body').animate({
	// 				scrollTop: $($.attr(this, 'href')).offset().top
	// 			}, 500);
	// 		}
	// 	});
	// }

	// function showCollapsedMenu() {
	// 	let state = 0;

	// 	$('.top').on('click', function(){
	// 		state = 0;
	// 		if($('.def-nav-menu-item').css('display') == 'block'){
	// 			$('.def-nav-menu-item').css('display', 'none');
	// 		}
	// 	});

	// 	$('.fas.fa-bars').on('click', function () {
	// 		if (state == 0) {
	// 			state = 1;
	// 			$('.def-nav-menu-items')
	// 				.css('padding-top', '2.25em');

	// 			$('.def-nav-menu-item')
	// 				.css('display', 'block')
	// 				.css('text-align', 'right')
	// 				.on('click', function(){
	// 					state = 0;
	// 					$('.def-nav-menu-item')
	// 					.css('display', 'none');
	// 				});
	// 		}else{
	// 			state = 0;
	// 			$('.def-nav-menu-item')
	// 			.css('display', 'none');
	// 		}
	// 	});
	// }

	// function makeAccordion() {
	// 	$("#accordion").accordion({
	// 		header: "h6",
	// 		collapsible: true,
	// 		active : 'none',
	// 		heightStyle: "content",
	// 		icons: null,
	// 		activate: function (event, ui) {
	// 			let headerNumber = 0;
	// 			let additionalOffset = 71;
	// 			if (typeof ui.newHeader.attr('id') != 'undefined') {
	// 				headerNumber = +ui.newHeader.attr('id').substr(7);
	// 				console.log(headerNumber)
	// 				if (headerNumber === 1) {
	// 					additionalOffset += 67;
	// 				}
	// 				$('html, body').animate(
	// 					{scrollTop: ui.newHeader.offset().top - additionalOffset}, 800);
	// 			}
	// 		}
	// 	});
	// }

	// return {
	// 	highlightCurrentLink: highlightCurrentLink(),
	// 	showCollapsedMenu: showCollapsedMenu(),
	// 	animateScroll: animateScroll(),
	// 	accordion: makeAccordion(),
	// }
})();