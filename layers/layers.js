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
var format_Estadosdevenezuela_1 = new ol.format.GeoJSON();
var features_Estadosdevenezuela_1 = format_Estadosdevenezuela_1.readFeatures(json_Estadosdevenezuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estadosdevenezuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estadosdevenezuela_1.addFeatures(features_Estadosdevenezuela_1);
var lyr_Estadosdevenezuela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estadosdevenezuela_1, 
                style: style_Estadosdevenezuela_1,
                popuplayertitle: "Estados de venezuela",
                interactive: true,
                title: '<img src="styles/legend/Estadosdevenezuela_1.png" /> Estados de venezuela'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Estadosdevenezuela_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Estadosdevenezuela_1];
lyr_Estadosdevenezuela_1.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_Estadosdevenezuela_1.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_Estadosdevenezuela_1.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_Estadosdevenezuela_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});