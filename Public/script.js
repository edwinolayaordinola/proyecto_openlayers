/*var vector;
var view ;
var map ;
var layer,estilo;

$(document).ready(function(){

	var sector_comercial = new ol.layer.Tile({
					source : new ol.source.TileWMS({
						url : 'http://localhost:8080/geoserver/wms',
						params: {
							'LAYERS' :'espacio_gis_epsgrau:piura_sig_sector_comercial',
							'FORMAT' : 'image/png'
						},
						transparent: true
					})});

	var manzanas = new ol.layer.Tile({
					source : new ol.source.TileWMS({
						url : 'http://localhost:8080/geoserver/wms',
						params: {
							'LAYERS' :'espacio_gis_epsgrau:piura_sig_manzanas',
							'FORMAT' : 'image/png'
						},
						transparent: true
					})});

	var predios = new ol.layer.Tile({
					source : new ol.source.TileWMS({
						url : 'http://localhost:8080/geoserver/wms',
						params: {
							'LAYERS' :'espacio_gis_epsgrau:piura_sig_predios',
							'FORMAT' : 'image/png'
						},
						transparent: true
					})});

	var clientes = new ol.layer.Tile({
					source : new ol.source.TileWMS({
						url : 'http://localhost:8080/geoserver/wms',
						params: {
							'LAYERS' :'espacio_gis_epsgrau:piura_sig_clientes',
							'FORMAT' : 'image/png'
						}
						,
						transparent: true
					})});

	var vector_sector_comercial = new ol.layer.Vector({
	  source: new ol.source.Vector({
		  	style: new ol.style.Style({
		          fill: new ol.style.Circle({
			            color: 'rgba(255, 255, 255, 200)'
			      })}),
		    format: new ol.format.GeoJSON(),
		    url: function(extent) {
		    	var url1 = 'http://localhost:8082/geoserver/espacio_gis_epsgrau';
		    	var servicio = '/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=espacio_gis_epsgrau:piura_sig_sector_comercial&';
		    	var filtro = 'cql_filter=id_prov=1&';
		    	var format = 'outputFormat=application/json&srsname=EPSG:3857';
		      	//return  'http://localhost:8082/geoserver/espacio_gis_epsgrau/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=espacio_gis_epsgrau:piura_sig_sector_comercial&id_prov=1&outputFormat=application/json&srsname=EPSG:3857';
		      	return url1+servicio+filtro+format;
		    }
	  })
	});


	var raster = new ol.layer.Tile({
	  source: new ol.source.OSM()
	});

	view = new ol.View({
			center: ol.proj.fromLonLat([-80.615916, -5.191902]),//-89.78959539,-5.78318592
			zoom:18
		});
	 
	map = new ol.Map({
		 target:  document.getElementById('map'),
		 view: view
	 });

	map.addLayer(manzanas);
	map.addLayer(clientes);

	layer = new ol.layer.Vector();

	
	
	$("#btn_buscar_suministro").click(function(){

		map.removeLayer(layer);

		var suministro = $('#txt_suministro').val();

		vector = new ol.source.Vector({
			  	format: new ol.format.GeoJSON(),
			    url: function(extent) {
			    	var url = 'http://localhost:8080/geoserver/espacio_gis_epsgrau';
			    	var servicio = '/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=espacio_gis_epsgrau:piura_sig_clientes&';
			    	var filtro = 'cql_filter=suministro='+parseInt(suministro)+'&';
			    	var format = 'outputFormat=application/json&srsname=EPSG:3857';
			    	/*10567969*/
			      	/*return url+servicio+filtro+format;*/
			    /*}
		  });		

		/*var layer = new ol.layer.Vector({
			  source: vector,
			  style : new ol.style.Style({
			          image: new ol.style.Circle({
		                    stroke: new ol.style.Stroke({
		                        color: 'rgba(255, 255, 0, 1)',
		                        width: 4
		                    }),
		                    radius: 10
		                })
				})
			});
		*/
		


		/*estilo = new ol.style.Style({
          	image: new ol.style.Circle({
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 255, 0, 1)',
                    width: 4
                }),
                radius: 10
            })
		});

		layer.setSource(vector);
		layer.setStyle(estilo);

		vector.on('addfeature',function(evt){
			map.getView().setCenter(evt.feature.getGeometry().getCoordinates());
			map.getView().setZoom(22);
		});		
		
		map.addLayer(layer);
		
	});

	function buscar_suministro(suministro){
	}

});*/

