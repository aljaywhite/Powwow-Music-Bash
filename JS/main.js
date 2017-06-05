$('body').scrollspy({ target: '.navbar-collapse' });

function initMap() {
        var pepperUpperClub = {lat: 38.411340, lng: -85.793889};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: pepperUpperClub
        });

        var marker = new google.maps.Marker({
          position: pepperUpperClub,
          map: map
        });
      }
