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
		var lien = 'http://merci.bl.ee/php/getArticles.php';
		var valeur_data = 'categorie='+x[1];
	
	} else{
		if(x[0]=="id_r"){
			var lien = 'http://127.0.0.1/Merci/php/getArticlesByRubrique.php';
			var valeur_data = 'rubrique='+x[1];
		}
	}
	
	var output = $('#wrap_articles');
	
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
			//output.listview('refresh'); //Permet d'appliquer le style JQM aux elts nouvellement ajoutés
		},
		error: function(data, status, erreur){
			console.log(data);
			alert("Une erreur s'est produite lors du chargement des données. "+status);
		}
	});
	return false;	
});     

/**
 * Fonction de récupération des paramètres GET de la page
 * @return Array Tableau associatif contenant les paramètres GET
 *//*
function extractUrlParams(){	
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	return x;
}
*/