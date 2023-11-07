var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/roseeric/clonhuvxj003p01r6adif9nxw.html?title=copy&access_token=pk.eyJ1Ijoicm9zZWVyaWMiLCJhIjoiY2xvaXlvd204MWg0NDJscWV1Z213bngwMiJ9.SfIEUGSweh97VUrrniVDJQ&zoomwheel=true&fresh=true#7.43/43.888/-123.487', {
    maxZoom: 17,
    }).addTo(map);
 