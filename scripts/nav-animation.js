
var navAnimation = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.primary-nav-wrapper' ),
		didScroll = false,
		changeHeaderOn = 46;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 0 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'primary-nav-wrapper-shrink' );
		}
		else {
			classie.remove( header, 'primary-nav-wrapper-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

var $root = $('html, body');

$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, {
    	duration: 850,
    	specialEasing: {
    		height: "easeInOut"
    	}
    });
    return false;
});