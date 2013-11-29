// Script Ajax de recupération des catégorie

$(document).ready(function(){
	
	//Récupère les paramètre de l'url de la page
	var url = window.location.search;
	var id_categorie = 	url.substring(url.lastIndexOf("=")+1);
	
	var output = $('#wrap_articles');
	var lien = 'http://127.0.0.1/Merci/php/getArticles.php';
	
	$.ajax({
		url: lien,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		type: 'GET',
		data:'categorie='+id_categorie,
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
