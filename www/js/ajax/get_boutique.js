// Script Ajax de recupération des catégorie

$(document).ready(function(){
	
	var output = $('#wrap');
	var lien = 'http://merci.bl.ee/php/getBoutique.php';
	
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
								+'<ul data-role="listview" data-inset="false" data-icon="false">'
									+'<li><a href="annonceur.html?id_a='+item.id+'" data-ajax="false">'
										+'<img src="'+item.img+'">'
										+'<h1>'+item.nom+'</h1>'
										+'<p>'+item.description+'</p>'
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
