
jQuery(document).ready(function(){

	var markers = new Array();

	function initialize() {
	var mapOptions = {
		zoom: 3,
		center: new google.maps.LatLng(40.0176, -105.2797)
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

		var infowindow = new google.maps.InfoWindow();

		for (var i = 0; i < markers.length; i++ ) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(markers[i].location.latitude, markers[i].location.longitude),
				map: map,
				animation: google.maps.Animation.DROP

			});

			google.maps.event.addListener(marker, 'mouseover', (function(marker, i){
				return function(){
					infowindow.setContent('<img src="'+markers[i].images.thumbnail.url+'"/>');
					infowindow.setZIndex(1000);
					infowindow.open(map, marker);
				}
			})(marker, i));

		}
	}

	var tag = 'worldcup';

	$.ajax({

		url: 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=1931ef62a2a3444f92e5e9b1fe635b43',
		dataType: 'jsonp',
		success: function(results){
			console.log(results);

			for (var x=0; x < results.data.length; x++ ){ //x++ takes x and add 1; x+5 would do x, then the 6th, then the 11th, etc.

					if (results.data[x].caption){
						var caption = results.data[x].caption.text;
					}

					if (results.data[x].location) {

						markers.push(results.data[x]);

					}

					// $('body').append('<img src="'+results.data[x].images.standard_resolution.url+'"/><h3>'+caption+'</h3>'); //place in body of html; empty, then append images
				}

				console.log(markers);
				initialize();

		} //close success

	}); //close ajax call

});