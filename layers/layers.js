var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Laboratorio2_1 = new ol.format.GeoJSON();
var features_Laboratorio2_1 = format_Laboratorio2_1.readFeatures(json_Laboratorio2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laboratorio2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laboratorio2_1.addFeatures(features_Laboratorio2_1);
var lyr_Laboratorio2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laboratorio2_1, 
                style: style_Laboratorio2_1,
                popuplayertitle: 'Laboratorio 2 ',
                interactive: true,
    title: 'Laboratorio 2 <br />\
    <img src="styles/legend/Laboratorio2_1_0.png" /> Bar Callejón<br />\
    <img src="styles/legend/Laboratorio2_1_1.png" /> Campos Deportivos SERVIU<br />\
    <img src="styles/legend/Laboratorio2_1_2.png" /> Casa del Arte - Pinacoteca UdeC<br />\
    <img src="styles/legend/Laboratorio2_1_3.png" /> Catedral Metropolitana de la Santísima Concepción<br />\
    <img src="styles/legend/Laboratorio2_1_4.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Laboratorio2_1_5.png" /> Club Hípico de Concepción<br />\
    <img src="styles/legend/Laboratorio2_1_6.png" /> Fuerte La Planchada<br />\
    <img src="styles/legend/Laboratorio2_1_7.png" /> Humedal Urbano Price<br />\
    <img src="styles/legend/Laboratorio2_1_8.png" /> Laguna Chica San Pedro<br />\
    <img src="styles/legend/Laboratorio2_1_9.png" /> Mina Chiflón del Diablo<br />\
    <img src="styles/legend/Laboratorio2_1_10.png" /> Parque Humedal Los Batros<br />\
    <img src="styles/legend/Laboratorio2_1_11.png" /> Parque Isidora Goyenechea de Cousiño de Lota<br />\
    <img src="styles/legend/Laboratorio2_1_12.png" /> Parque Laguna Redonda<br />\
    <img src="styles/legend/Laboratorio2_1_13.png" /> Parque Zoológico Concepción<br />\
    <img src="styles/legend/Laboratorio2_1_14.png" /> Plaza de Armas Chiguayante<br />\
    <img src="styles/legend/Laboratorio2_1_15.png" /> Plaza de Armas de Lota<br />\
    <img src="styles/legend/Laboratorio2_1_16.png" /> Plaza de armas Tomé<br />\
    <img src="styles/legend/Laboratorio2_1_17.png" /> Sitio de Memoria Fuerte El Morro<br />\
    <img src="styles/legend/Laboratorio2_1_18.png" /> Teatro Enrique Molina<br />\
    <img src="styles/legend/Laboratorio2_1_19.png" /> Templo de Concepción Chile<br />\
    <img src="styles/legend/Laboratorio2_1_20.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Laboratorio2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Laboratorio2_1];
lyr_Laboratorio2_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Nombre': 'Nombre', 'Area': 'Area', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'Tipo': 'Tipo', 'Actividad': 'Actividad', 'Horario': 'Horario', 'Tarifa': 'Tarifa', 'Dirección': 'Dirección', 'Video': 'Video', });
lyr_Laboratorio2_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Tipo': 'TextEdit', 'Actividad': 'TextEdit', 'Horario': 'TextEdit', 'Tarifa': 'TextEdit', 'Dirección': 'TextEdit', 'Video': 'TextEdit', });
lyr_Laboratorio2_1.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'CUT_REG': 'inline label - always visible', 'CUT_PROV': 'inline label - always visible', 'CUT_COM': 'inline label - always visible', 'REGION': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Tarifa': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Video': 'inline label - visible with data', });
lyr_Laboratorio2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});