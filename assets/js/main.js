var interactions = new ol.interaction.defaults({
    altShiftDragRotate: false,
    pinchRotate: false
});
var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: ({ collapsible: false })
    }).extend([
        new ol.control.ZoomSlider(),
        new ol.control.ScaleLine()
    ]),
    interactions: interactions,
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                attributions: [
                    'Maps © OpenStreetMap | Project © Damian Hall-Beal',
                ],
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-4.3808, 53.2845]),
        zoom: 11,
        maxZoom: 18
    })

});
var myExtent = map.getView().calculateExtent(map.getSize());
map.setView(
    new ol.View({
        center: ol.proj.fromLonLat([-4.3808, 53.2845]),
        extent: myExtent,
        zoom: 11,
        maxZoom: 18
    })
);
var markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: 'marker.png?time=' + Date.now()
        })

    })
});
map.addLayer(markers);

// Glyn Davies
var marker1 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.16287, 53.22553]))
});
markers.getSource().addFeature(marker1);

// Jane Evans
var marker2 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.16402, 53.23034]))
});
markers.getSource().addFeature(marker2);

// Georgina Rambton
var marker3 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09524, 53.26431]))
});
markers.getSource().addFeature(marker3);

// Beaumaris Jewellery
var marker4 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09166, 53.26354]))
});
markers.getSource().addFeature(marker4);

// David Jones
var marker5 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09316, 53.2645]))
});
markers.getSource().addFeature(marker5);

// Canolfan David Hughes
var marker6 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.0914, 53.26429]))
});
markers.getSource().addFeature(marker6);

// The Extange
var marker7To9 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09254, 53.26335]))
});
markers.getSource().addFeature(marker7To9);

// Art Quarter Gallery
var marker10 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09333, 53.26388]))
});
markers.getSource().addFeature(marker10);

// Ian Walton
var marker11 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09155, 53.26338]))
});
markers.getSource().addFeature(marker11);

// Hartworks (Anne Smith)
var marker12 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09158, 53.26305]))
});
markers.getSource().addFeature(marker12);

// Plas Bodfa Projects and Siw Thomas
var marker13and23 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.09795, 53.29374]))
});
markers.getSource().addFeature(marker13and23);

// Val Gem Hughes
var marker14 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.08065, 53.29593]))
});
markers.getSource().addFeature(marker14);

// Marion Rose
var marker15 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.08113, 53.30641]))
});
markers.getSource().addFeature(marker15);

// Janet Bell
var marker16 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.07051, 53.29915]))
});
markers.getSource().addFeature(marker16);

// Geraldine Hedderick
var marker17 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.06691, 53.30164]))
});
markers.getSource().addFeature(marker17);

// Jane Bunce
var marker18 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.06670, 53.30234]))
});
markers.getSource().addFeature(marker18);

// Michael Linford
var marker19 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.06923, 53.30506]))
});
markers.getSource().addFeature(marker19);

// Callaghan Creative
var marker20 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.07033, 53.30595]))
});
markers.getSource().addFeature(marker20);

// Red Studio
var marker21 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.07019, 53.3057]))
});
markers.getSource().addFeature(marker21);

// Rhiannon & Paul Gash
var marker22 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.14827, 53.30032]))
});
markers.getSource().addFeature(marker22);

// 23 is also 13

// Helen Dolling
var marker24 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.21847, 53.28694]))
});
markers.getSource().addFeature(marker24);

// Janet Peers
var marker25 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.24034, 53.29958]))
});
markers.getSource().addFeature(marker25);

// Jenny Armour
var marker26 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.24790, 53.32628]))
});
markers.getSource().addFeature(marker26);

// Irene Taylor Moores
var marker27 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.2966, 53.36127]))
});
markers.getSource().addFeature(marker27);

// Beth Owen Williams
var marker28 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.31752, 53.38658]))
});
markers.getSource().addFeature(marker28);

// Peter Verity
var marker29 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.36919, 53.38001]))
});
markers.getSource().addFeature(marker29);

// Oriel Rhosgoch
var marker30 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.39258, 53.37584]))
});
markers.getSource().addFeature(marker30);

// Artisan Studio
var marker31 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.3458, 53.4103]))
});
markers.getSource().addFeature(marker31);

// David Weaver
var marker32 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.47081, 53.40776]))
});
markers.getSource().addFeature(marker32);

// Caffi Siop Mechell
var marker33 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.45384, 53.39248]))
});
markers.getSource().addFeature(marker33);

// Helen Grobe White
var marker34 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.44742, 53.3925]))
});
markers.getSource().addFeature(marker34);

// Wendy Vidler
var marker35 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.50562, 53.40279]))
});
markers.getSource().addFeature(marker35);

// Stwdio Refail
var marker36 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.50346, 53.29183]))
});
markers.getSource().addFeature(marker36);

// Bay Tree Gallery
var marker37 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.56224, 53.28164]))
});
markers.getSource().addFeature(marker37);

// Bryn Humphreys
var marker38 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.64391, 53.31576]))
});
markers.getSource().addFeature(marker38);

// Whispy Willow Creations
var marker39 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.65885, 53.31043]))
});
markers.getSource().addFeature(marker39);

// Ucheldre Centre
var marker40To44 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63856, 53.30944]))
});
markers.getSource().addFeature(marker40To44);

// Janey Masters
var marker45 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.63549, 53.30447]))
});
markers.getSource().addFeature(marker45);

// Anwen Roberts
var marker46 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.59922, 53.27128]))
});
markers.getSource().addFeature(marker46);

// Huw Gareth Jones
var marker47 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.58591, 53.24295]))
});
markers.getSource().addFeature(marker47);

// Judith Donaghy
var marker48 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.49433, 53.22884]))
});
markers.getSource().addFeature(marker48);

// Jane Samuel
// (approx location)
var marker49 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.52227, 53.22654]))
});
markers.getSource().addFeature(marker49);

// ArtismUK
var marker50 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.46573, 53.19044]))
});
markers.getSource().addFeature(marker50);

// Mark Kostiak
var marker51 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.29661, 53.1616]))
});
markers.getSource().addFeature(marker51);

// Wanda & David Garner
// (approx location)
var marker52 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.28032, 53.17999]))
});

// Carole Randall
var marker53 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.20283, 53.21512]))
});
markers.getSource().addFeature(marker53);

// Andrew Southall
var marker54 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.26500, 53.21892]))
});
markers.getSource().addFeature(marker54);

// Oriel Mon
var marker55 = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.31203, 53.26343]))
});
markers.getSource().addFeature(marker55);


map.on('click', function (evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature) {
            return feature;
        });
    if (feature == marker1) {
        infoPageContent("Oriel Glyn Davies", "./pages/1.html");
    } else if (feature == marker2) {
        infoPageContent("Jane Evans", "./pages/2.html");
    } else if (feature == marker3) {
        infoPageContent("Georgina Rambton", "./pages/3.html");
    } else if (feature == marker4) {
        infoPageContent("Beaumaris Jewellery", "./pages/4.html");
    } else if (feature == marker5) {
        infoPageContent("David Jones", "./pages/5.html");
    } else if (feature == marker6) {
        infoPageContent("Canolfan David Hughes", "./pages/6.html");
    } else if (feature == marker7To9) {
        infoPageContent("Jon Fairbairn", "./pages/7To9.html");
    } else if (feature == marker10) {
        infoPageContent("Art Quarter Gallery", "./pages/10.html");
    } else if (feature == marker11) {
        infoPageContent("Ian Walton", "./pages/11.html");
    } else if (feature == marker12) {
        infoPageContent("Hartworks (Anne Smith)", "./pages/12.html");
    } else if (feature == marker13and23) {
        infoPageContent("Plas Bodfa", "./pages/13and23.html");
    } else if (feature == marker14) {
        infoPageContent("Val Gem Hughes", "./pages/14.html");
    } else if (feature == marker15) {
        infoPageContent("Marion Rose", "./pages/15.html");
    } else if (feature == marker16) {
        infoPageContent("Janet Bell", "./pages/16.html");
    } else if (feature == marker17) {
        infoPageContent("Geraldine Hedderick", "./pages/17.html");
    } else if (feature == marker18) {
        infoPageContent("Jane Bunce", "./pages/18.html");
    } else if (feature == marker19) {
        infoPageContent("Michael Linford", "./pages/19.html");
    } else if (feature == marker20) {
        infoPageContent("Callaghan Creative", "./pages/20.html");
    } else if (feature == marker21) {
        infoPageContent("Red Studio", "./pages/21.html");
    } else if (feature == marker22) {
        infoPageContent("Rhiannon & Paul Gash", "./pages/22.html");
    } else if (feature == marker24) {
        infoPageContent("Helen Dolling", "./pages/24.html");
    } else if (feature == marker25) {
        infoPageContent("Janet Peers", "./pages/25.html");
    } else if (feature == marker26) {
        infoPageContent("Jenny Armour", "./pages/26.html");
    } else if (feature == marker27) {
        infoPageContent("Irene Taylor Moores", "./pages/27.html");
    } else if (feature == marker28) {
        infoPageContent("Beth Owen Williams", "./pages/28.html");
    } else if (feature == marker29) {
        infoPageContent("Peter Verity", "./pages/29.html");
    } else if (feature == marker30) {
        infoPageContent("Oriel Rhosgoch", "./pages/30.html");
    } else if (feature == marker31) {
        infoPageContent("David Weaver", "./pages/31.html");
    } else if (feature == marker32) {
        infoPageContent("Caffi Siop Mechell", "./pages/32.html");
    } else if (feature == marker33) {
        infoPageContent("Helen Grobe White", "./pages/33.html");
    } else if (feature == marker34) {
        infoPageContent("Helen White", "./pages/34.html");
    } else if (feature == marker35) {
        infoPageContent("Wendy Vidler", "./pages/35.html");
    } else if (feature == marker36) {
        infoPageContent("Stiwdio Refail", "./pages/36.html");
    } else if (feature == marker37) {
        infoPageContent("Bay Tree Gallery", "./pages/37.html");
    } else if (feature == marker38) {
        infoPageContent("Bryn Humphreys", "./pages/38.html");
    } else if (feature == marker39) {
        infoPageContent("Wispy Willow Creations", "./pages/39.html");
    } else if (feature == marker40To44) {
        infoPageContent("Canolfan Ucheldre", "./pages/40To44.html");
    } else if (feature == marker45) {
        infoPageContent("Janey Masters", "./pages/45.html");
    } else if (feature == marker46) {
        infoPageContent("Anwen Roberts", "./pages/46.html");
    } else if (feature == marker47) {
        infoPageContent("Huw Gareth Jones", "./pages/47.html");
    } else if (feature == marker48) {
        infoPageContent("Judith Donaghy", "./pages/48.html");
    } else if (feature == marker49) {
        infoPageContent("Jane Samuel", "./pages/49.html");
    } else if (feature == marker50) {
        infoPageContent("Artism UK", "./pages/50.html");
    } else if (feature == marker51) {
        infoPageContent("Mark Kotiak", "./pages/51.html");
    } else if (feature == marker52) {
        infoPageContent("Wanda & David Garner", "./pages/52.html");
    } else if (feature == marker53) {
        infoPageContent("Carole Randall", "./pages/53.html");
    } else if (feature == marker54) {
        infoPageContent("Andrew Southall", "./pages/54.html");
    } else if (feature == marker55) {
        infoPageContent("Oriel Mon", "./pages/55.html");
    }
});


function infoPageContent(name, url) {

    // document.getElementById("infoPageHeading").innerHTML = name;

    document.getElementById("infoPage").style.display = "block";
    document.getElementById("hideMap").style.display = "block";
    document.getElementById("infoPageContent").data = url;
    document.getElementById("infoPageContent").src = url;
}

var idleTime = 0;
$(document).ready(function () {
    // Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    // Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    map.on('moveend', function (evt) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    // if (document.getElementById("infoPage").style.display == "block") {
    if (idleTime > 0) { // if idle for more than one minute, then close the info page
        closeInfoPage();
        idleTime = 0;
    }
    // }
}
var hideMap = document.getElementById("hideMap");
document.addEventListener("click", function (event) {
    if (hideMap == event.target && hideMap.contains(event.target)) {
        closeInfoPage();
    }
});

closeInfoPage = function () {
    if (navigator.onLine) {
        window.location.reload(true);
    }
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "10000",
    "hideDuration": "10000",
    "timeOut": "10000",
    "extendedTimeOut": "5000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
var offlineInterval;
window.addEventListener('offline', () => {
    toastr.error('You are offline!');
    if (!offlineInterval) {
        offlineInterval = setInterval(() => {
            toastr.error('You are offline!');
        }, 5000);
    }
});

window.addEventListener('online', () => {
    clearInterval(offlineInterval);
    offlineInterval = null;
    toastr.success('You are back online!');
});
