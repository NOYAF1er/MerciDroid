// Script Ajax de recupération des catégorie

$(document).ready(function(){
	
	var output = $('#wrap');
	var lien = 'http://merci.bl.ee/php/getCategorie.php';
	
	$.ajax({
		url: lien,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		beforeSend : function() {$.mobile.loading('show')},
		complete   : function() {$.mobile.loading('hide')},
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){
				var donnees = '<li data-cards-type=\'publictransport\'>'
								+'<h1><a href="articles.html?id='+item.id+'" data-ajax="false" data-transition="slide">'+item.nom+'</a></h1>'
							+'</li>';
				
				output.append(donnees).trigger( "create" );								 
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
