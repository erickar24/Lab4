var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/roseeric/clonhuvxj003p01r6adif9nxw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zZWVyaWMiLCJhIjoiY2xveGtqbDBkMDI1MTJrbzVuY3VheGw5bSJ9.UzRS5L1SuYaRY5CDtt94qw', {
    maxZoom: 17,
}).addTo(map);




// Assuming 'data' is your GeoJSON data
fetch('NPS_-_Land_Resources_Division_Boundary_and_Tract_Data_Service.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'darkgreen',
                fillColor: 'darkgreen',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5
            },
            onEachFeature: function(feature, layer) {
                console.log(feature.properties); // Log the properties to the console
                layer.bindPopup('Park name: ' + feature.properties.UNIT_NAME);
            }
            
            
        }).addTo(map);
    })
    .catch(error => console.error('Error: ', error));


