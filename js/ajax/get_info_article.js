// Script Ajax de recupération des catégorie

$(document).ready(function(){
	
	//Récupère les paramètre de l'url de la page
	var url = window.location.search;
	var id_article = 	url.substring(url.lastIndexOf("=")+1);
	
	var lien = 'http://127.0.0.1/Merci/php/getInfoArticle.php';
	
	$.ajax({
		url: lien,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		type: 'GET',
		data:'article='+id_article,
		beforeSend : function() {$.mobile.loading('show')},
		complete   : function() {$.mobile.loading('hide')},
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){
				var nom = item.nom;
				var reference = item.reference;
				var caracteristiques = item.caracteristiques;
				var description = item.description;
				var image = item.img;
				var prix = item.prix;
				var etat = item.etat;
				var date_ajout = item.date_ajout;
				var date_retrait = item.date_retrait;
				
				$('#nom_article').html('<h1>'+nom+'</h1>').trigger( "create" );
				$('#img_article').html('<img src="'+image+'" alt="image" />').trigger( "create" );
				$('#prix_article').html('<h1>'+prix+' F CFA</h1>').trigger( "create" );
				$('#etat_article').html('<h2>'+etat+'</h2>').trigger( "create" );
				$('#caracteristique').append(caracteristiques).trigger( "create" );
				$('#wrap_description p').text(description).trigger( "create" );
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
