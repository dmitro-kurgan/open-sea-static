import '../components/scss/style.scss';

// import '../components/scss/ltr.scss';

import '../components/js/bootstrap.min';

import '../components/js/parallax.min';

$('.parallax-window').parallax({});

import 'slick-carousel';

$(document).ready(function() {
	$(function slickRecipes() {
		var slickRecipes = $('.slick-recipes'),
		cur = $('#recipesSlider .controls .controls__current'),
		total = $('#recipesSlider .controls .controls__total');

		slickRecipes.on('init', function(event, slick, currentSlide){
			var nrCurrentSlide = slick.currentSlide + 1,
		      totalSlidesPerPage = nrCurrentSlide + 3;
			cur.html(nrCurrentSlide);
			total.html(" / " + slick.slideCount);
		});

		var current = 0;

		slickRecipes.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			if(screen.width > 768) {
				$('.slick-prev, .slick-next').css('opacity', '0');
			}
		});

		slickRecipes.on('afterChange', function(event, slick, currentSlide, nextSlide){
			current = currentSlide;
			var nrCurrentSlide = slick.currentSlide + 1,
				totalSlidesPerPage = nrCurrentSlide + 3;
			if(screen.width > 768) {
				$('.slick-next, .slick-prev').css('opacity', '1');
			}
			if(totalSlidesPerPage > slick.slideCount) {
				cur.html(nrCurrentSlide);
				total.html(" / " + slick.slideCount);
			} else {
				cur.html(nrCurrentSlide);
				total.html(" / " + slick.slideCount);
			}
		});

		slickRecipes.slick({
			infinite: true,
			focusOnSelect: true,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						centerMode: false,
						focusOnSelect: false
					}
				}
			]
		});
	});

	$(function slickMain() {
		$('.slick-main').slick({
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});
});

import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

//HAMBURGER MENU
$(function openMenu() {
	var menu = $('#menu');
	$('#hamburger').on('click', function () {
		menu.toggleClass('opened');
		$(this).toggleClass('opened');
	});
	$('#menuClose').on('click', function () {
		menu.removeClass('opened');
	});

	$(document).mouseup(function(e) {
		var block = $("#menu, #hamburger");
		if(!block.is(e.target) && block.has(e.target).length === 0) {
			block.removeClass('opened');
		}
	});
});

//SCROLL ON MAIN PAGE

$(function scrollBanner() {
	$.scrollThis = function () {
 		var lastScrollTop = $(window).scrollTop(),
	        delta = 5,
	        eleH = $('.home__banner').outerHeight(),
	        isScrolling = false;
	    $(window).scroll(function () {
	        if(isScrolling)
	            return;
	        var nowScrollTop = $(this).scrollTop();
	        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
	            if (nowScrollTop <= eleH && nowScrollTop >= lastScrollTop) {
	                isScrolling = true;
	                $('html,body').animate({
	                    scrollTop: $('body section:first-of-type').offset().top
	                }, 600, function() {
	                    isScrolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	            } else if (nowScrollTop <= eleH && nowScrollTop < lastScrollTop) {
	                isScrolling = true;
	                $('html,body').animate({
	                    scrollTop: 0
	                }, 600, function() {
	                    isScrolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	            }
	            lastScrollTop = nowScrollTop;
	        }
	    });
	}
	if(screen.height > 900) {
	   $.scrollThis();
	}
	$('.home__banner-down').click("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});

//TRUNCATE

$(document).ready(function() {
  (function() {
    var showChar = 340;
    var ellipsestext = "";

    $(".truncate").each(function() {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content;
        // var m = $('.more');
        // var l = $('.less');
        var html =
          '<div class="truncate-text" style="display:block">' +
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '<a href="" class="moreless more">קרא עוד…</a></span></span></div><div class="truncate-text" style="display:none">' +
          h +
          '<a href="" class="moreless less">להסתיר</a></span></div>';

        $(this).html(html);
      }
    });

    $(".moreless").click(function() {
      var thisEl = $(this);
      var cT = thisEl.closest(".truncate-text");
      var tX = ".truncate-text";

      if (thisEl.hasClass("less")) {
        cT.prev(tX).toggle();
        cT.slideToggle();
      } else {
        cT.toggle();
        cT.next(tX).fadeToggle();
      }
      return false;
    });
    /* end iffe */
  })();

  /* end ready */
});

//

const WOW = require('wowjs');

import '../../node_modules/wowjs/css/libs/animate.css';

window.wow = new WOW.WOW({
    live: false
});

window.wow.init();




//

// import parallax from 'parallax.js';

// import img from '../components/images/banner-1.jpg';


// $('.parallax-window').parallax({imageSrc: img});

// $('.parallax-window').parallax({
//     naturalWidth: 600,
//     naturalHeight: 400
//   });


// import Parallax from 'parallax-js';

// var scene = document.getElementById('parallax');
// var parallaxInstance = new Parallax(scene, {
// 	relativeInput: true
// });


// var scene = $('#parallax').get(0);
// var parallaxInstance = new Parallax(scene, {
// 	relativeInput: true
// });

// import parallax from 'parallax.js';

// const parallax = require('parallax.js');

// new parallax(".parallax-window", {

// })