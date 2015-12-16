function geo() {
// Sets up the options
	
	var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};

		// If geo is turned on, it runs this
		function success(pos) {
 		window.open('offers-page-after-check-in.html', '_self')
		};

		function error(err) {
			var error = document.getElementById('geoLocationError');
		 	error.innerHTML = "Please turn on Geolocation in your browser's settings and try again";
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	}