var map = L.map('map').setView([44.06, -121.31], 8);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/roseeric/clonhuvxj003p01r6adif9nxw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zZWVyaWMiLCJhIjoiY2xveGtqbDBkMDI1MTJrbzVuY3VheGw5bSJ9.UzRS5L1SuYaRY5CDtt94qw', {
    maxZoom: 17,
}).addTo(map);




// Assuming 'data' is your GeoJSON data
//fetch('NPS_-_Land_Resources_Division_Boundary_and_Tract_Data_Service.geojson')
   
fetch('Willamette_Valley_Wetland_Priority_Sites.geojson')
.then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'darkblue',
                fillColor: 'darkblue',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.5
            },
            onEachFeature: function(feature, layer) {
                console.log(feature.properties); // Log the properties to the console
                layer.bindPopup('Site name: ' + feature.properties.SITENAME);
            }
            
            
        }).addTo(map);
    })
    .catch(error => console.error('Error: ', error));


