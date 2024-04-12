var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_INCES_1 = new ol.format.GeoJSON();
var features_INCES_1 = format_INCES_1.readFeatures(json_INCES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INCES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INCES_1.addFeatures(features_INCES_1);
var lyr_INCES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INCES_1, 
                style: style_INCES_1,
                popuplayertitle: "INCES",
                interactive: true,
                title: '<img src="styles/legend/INCES_1.png" /> INCES'
            });
var format_RUTA_2 = new ol.format.GeoJSON();
var features_RUTA_2 = format_RUTA_2.readFeatures(json_RUTA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA_2.addFeatures(features_RUTA_2);
var lyr_RUTA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA_2, 
                style: style_RUTA_2,
                popuplayertitle: "RUTA",
                interactive: true,
                title: '<img src="styles/legend/RUTA_2.png" /> RUTA'
            });
var format_kiosko_3 = new ol.format.GeoJSON();
var features_kiosko_3 = format_kiosko_3.readFeatures(json_kiosko_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiosko_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiosko_3.addFeatures(features_kiosko_3);
var lyr_kiosko_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiosko_3, 
                style: style_kiosko_3,
                popuplayertitle: "kiosko",
                interactive: true,
                title: '<img src="styles/legend/kiosko_3.png" /> kiosko'
            });

lyr_OSMStandard_0.setVisible(true);lyr_INCES_1.setVisible(true);lyr_RUTA_2.setVisible(true);lyr_kiosko_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_INCES_1,lyr_RUTA_2,lyr_kiosko_3];
lyr_INCES_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', });
lyr_RUTA_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_kiosko_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', });
lyr_INCES_1.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', });
lyr_RUTA_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_kiosko_3.set('fieldImages', {'id': '', 'nombre': '', });
lyr_INCES_1.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', });
lyr_RUTA_2.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_kiosko_3.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', });
lyr_kiosko_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});