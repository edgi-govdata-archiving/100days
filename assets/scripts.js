//Sticky header
$(document).ready(function(){
$("#nav").sticky({topSpacing:0, wrapperClassName:"nav-wrapper"});
});

//Back to TOC
$(document).ready(function(){
$(".back-to-top").sticky({topSpacing:100});
});

//Back to appendix themes
$(document).ready(function(){
  $(".back-to-top-2").sticky({topSpacing:100, wrapperClassName:"sticky-wrapper-2"});
});

//Return to main article from peer review
$(document).ready(function(){
$(".back-to-article").sticky({topSpacing:100, wrapperClassName:"back-to-article-wrapper"});
});

//spill map
function initialize() {
    var mapProp = {
        center: {
            lat: 37.5125744,
            lng: -100.8919434

        },
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#dadada"
                    },
                    {
                        "lightness": 50
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    }
    var map = new google.maps.Map(document.getElementById("spillMap"), mapProp);

    var layer = new google.maps.FusionTablesLayer({
        query: {
          select: 'geometry',
          from: '1uGungBXSFBd7GCEpgMhdNypD2fHrprwuEPBlzdqQ'
        }
      });
      layer.setMap(map);

    google.maps.event.addListener(layer, 'click', function(e) {

    // Change the content of the InfoWindow
    e.infoWindowHtml = "<b>City:</b> " + e.row['ACCITY'].value + "<br>"
    + "<b>State:</b> " + e.row['ACSTATE'].value + "<br>"
    + "<b>Amount spilled:</b> " + e.row['LOSS'].value + "<br>"
    + "<b>Total estimated property damage:</b> $" + e.row['PRPTY'].value + "<br>"
    + "<b>Commodity spilled:</b> " + e.row['COMM'].value;
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


//pesticide map
function initialize() {

    var mapProp = {
        center: {
            lat: 37.3871534,
            lng: -119.2751555
        },
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#dadada"
                    },
                    {
                        "lightness": 50
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    }
    var map = new google.maps.Map(document.getElementById("pesticideMap"), mapProp);

    var layer = new google.maps.FusionTablesLayer({
        query: {
          select: 'geometry',
          from: '1f0h0D351_ophyrHgTot6kMRAZmfAqoILBDsnqcTK'
        },
        styles: [{
          polygonOptions: {
            fillColor: '#e3e3e3',
            fillOpacity: 0.5
          }
        }, {
          where: 'EPEST_HIGH_KG > 0',
          polygonOptions: {
            fillColor: '#fcbca2'
          }
        }, {
          where: 'EPEST_HIGH_KG > 1000',
          polygonOptions: {
            fillColor: '#fb6a4a',
            fillOpacity: 0.5
          }
        }, {
          where: 'EPEST_HIGH_KG > 10000',
          polygonOptions: {
            fillColor: '#ef3b2c',
            fillOpacity: 0.5
          }
        }, {
            where: 'EPEST_HIGH_KG > 50000',
            polygonOptions: {
              fillColor: '#cb181d',
              fillOpacity: 0.5
            }
        }, {
        where: 'EPEST_HIGH_KG > 100000',
        polygonOptions: {
            fillColor: '#a50f15',
            fillOpacity: 0.5
        }
        }]
      });
      layer.setMap(map);

    google.maps.event.addListener(layer, 'click', function(e) {

    // Change the content of the InfoWindow
    e.infoWindowHtml = "<b>County:</b> " + e.row['Geographic Name'].value + "<br>"
    + "<b>Low estimate (kg):</b> " + e.row['EPEST_LOW_KG'].value + "<br>"
    + "<b>High estimate (kg):</b> " + e.row['EPEST_HIGH_KG'].value + "<br>"
    + "<b>All Ages in Poverty Percent:</b> " + e.row['All Ages in Poverty Percent'].value + "<br>"
    + "<b>Median Household Income in Dollars:</b> " + e.row['Median Household Income in Dollars'].value;
    });

    var legend = document.createElement('div');
    legend.id = 'legend';
    var content = [];
    content.push('<p><div class="color r"></div>No Data</p>');
    content.push('<p><div class="color r1"></div>&#8804 1 000 kg</p>');
    content.push('<p><div class="color r2"></div>&#8804 10 000 kg</p>');
    content.push('<p><div class="color r3"></div>&#8804 50 000 kg</p>');
    content.push('<p><div class="color r4"></div>&#8804 100 000 kg</p>');
    content.push('<p><div class="color r5"></div>&#62 100 000 kg</p>');
    legend.innerHTML = content.join('');
    legend.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
google.maps.event.addDomListener(window, 'load', initialize);
