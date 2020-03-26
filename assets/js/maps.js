 function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: {
                    lat: 53.400002,
                    lng: -2.983333
                }
            });
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    label: labels [i % labels.length]
                });
            });
            var MarkerCluster = new MarkerClusterer(map, markers,
            {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
        }
        var locations = [
                {lat: 53.390789, lng: -2.984755},
                {lat: 53.529620, lng: -2.957396},
                {lat: 53.421502, lng: -2.998510},
                {lat: 53.426210, lng: -2.993980},
                {lat: 53.404578, lng: -2.997168}
            ]