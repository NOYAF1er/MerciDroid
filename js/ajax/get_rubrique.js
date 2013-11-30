// Script Ajax de recupération des catégorie

$(document).ready(function(){
	
	//Récupère les paramètre de l'url de la page
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
	}

	//Conditions
	if(x[0]=="id"){
		var valeur_data = 'categorie='+x[1];
	
	} else{
		if(x[0]=="id_r"){
			var valeur_data = 'rubrique='+x[1];
		}
	}
	
	var output = $('#list_panel');
	var lien = 'http://127.0.0.1/Merci/php/getRubrique.php';
	
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
			output.html('<li data-role="list-divider">Rubriques</li>')
			$.each(data, function(i,item){
				var donnees = '<li data-cards-type=\'publictransport\'>'
								+'<a href="articles.html?id_r='+item.id+'" data-ajax="false" data-transition="slide">'+item.nom+'</a>'
							+'</li>';
												 
				output.append(donnees);
			});
			output.listview('refresh'); //Permet d'appliquer le style JQM aux elts nouvellement ajoutés
		},
		error: function(data, status, erreur){
			console.log(data);
			alert("Une erreur s'est produite lors du chargement des données. "+status);
		}
	});
	return false;	
});     
