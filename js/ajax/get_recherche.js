$(document).ready(function() {
		
	
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	$("#recherche").val(f["recherche"]).trigger( "create" );						
	
	var lien = 'http://127.0.0.1/Merci/php/recherche.php';
	var valeur_data = location.search.substring(1); //Récupère les paramètre de l'url de la page
	
	var output = $('#wrap');
	
	$.ajax({
		url: lien,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		type: 'GET',
		data: valeur_data,
		beforeSend : function() {$.mobile.loading('show')},
		complete   : function() {$.mobile.loading('hide')},
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){
				var donnees = '<li data-cards-type=\'publictransport\'>'
								+'<ul data-role="listview" data-inset="false" data-icon="false">'
									+'<li><a href="details_article.html?id='+item.id+'" data-ajax="false">'
										+'<img src="'+item.img+'">'
										+'<h1>'+item.nom+'</h1>'
										+'<p>'+item.caracteristiques+'</p>'
									+'</a></li>'
								+'</ul>'
							+'</li>';
				
				output.append(donnees).trigger( "create" ); //simule la creation de l'élément dc lui applique le style JQM
			});
		},
		error: function(data, status, erreur){
			console.log(data);
			alert("Une erreur s'est produite lors du chargement des données. "+status);
		}
	});
	return false;	
});
    