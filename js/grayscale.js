/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 //TEAM COMPONENTS DATA
function LoadTeam() {
    var workers = [{ name: "Francesco Coppola", role: "Responsabile ricerca e sviluppo", pic: "Homer.png" },
        { name: "Simone Governatori", role: "Amministratore società", pic: "Homer.png" },
        { name: "Martina Rossi", role: "Amminstratore società", pic: "Homer.png" },
        { name: "Andrea Fiorani", role: "Direttore tecnico", pic: "Homer.png" },
        { name: "Claudia Angeletti", role: "Responsabile commerciale", pic: "Homer.png" },
        { name: "Riccardo Ercolani", role: "Responsabile amministrativo", pic: "Homer.png" },
        { name: "Aurora Brega", role: "Responsabile commerciale", pic: "Homer.png" },
        { name: "Valerio Mariani", role: "Responsabile amministrativo", pic: "Homer.png" },
        { name: "Filippo Fratini", role: "Direttore tecnico", pic: "Homer.png" },
        { name: "Lorenzo Farinelli", role: "Developer", pic: "Homer.png" },
        { name: "Renato Carmenati", role: "Mentore", pic: "Homer.png" },
        { name: "Leonardo Guerro", role: "Mentore e developer", pic: "Homer.png" },
		{ name: "Patrizia Sghiatti", role: "Mentore", pic: "Homer.png" },
		{ name: "Enrico Giacomoni", role: "Mentore e Web Designer", pic: "Homer.png" },		];
    var carousel = document.getElementById("carousel_content");
    var team_html = "";
    for (var k = 0; k < workers.length; k++) {
        var p_name = carousel.getElementsByTagName("p")[0];
        var p_role = carousel.getElementsByTagName("p")[1];
        var picture = carousel.getElementsByTagName("img")[0];
        p_name.innerHTML = workers[k].name;
        p_role.innerHTML = workers[k].role;
        picture.src = "img/" + workers[k].pic;
        team_html += carousel.innerHTML;
    }
    var car = document.getElementById("carousel_content");
    car.innerHTML = team_html;
    var first_div = car.getElementsByTagName("div")[0];
    first_div.className += " active";
    car.innerHTML = car.innerHTML;
}

window.onload = function () {
    $(document).ready(LoadTeam());
};
 
 
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


//MAIL function
function SendMail() {
    var support_mail = "prova@gmail.it"; //TODO CHANGE SUPPORT EMAIL
    var subject = "FlavourBot";
    window.location.href = "mailto:" + support_mail + "?subject=" + subject;
}


// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(43.347293, 12.9262516));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(43.347293, 12.9262516), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(43.347293, 12.9262516);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
		icon: image
    });
	
	
}