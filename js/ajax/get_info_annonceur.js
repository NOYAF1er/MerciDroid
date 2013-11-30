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
		var valeur_data = 'article='+x[1];
	
	} else{
		if(x[0]=="id_a"){
			var valeur_data = 'auteur='+x[1];
			
		}
	}
	
	var lien = 'http://127.0.0.1/Merci/php/getInfoAnnonceur.php';
	
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
				var id = item.id;
				var nom_auteur = item.nom;
				var contacts = item.contacts;
				var email = item.email;
				var description = item.description;
				var localisation = item.localisation;
				var image = item.img;
				var type = item.type_auteur;
				
				$('#nom').append('<h1>'+nom_auteur+'</h1>').trigger( "create" );
				$('#img').html('<img src="'+image+'" alt="image" />').trigger( "create" );
				$('#contacts').html(contacts).trigger( "create" );
				$('#email').text(email).trigger( "create" );
				$('#localisation').text(localisation).trigger( "create" );
				$('#description').text(description).trigger( "create" );
				$('#type_auteur').html('<h2>'+type+'</h2>').trigger( "create" );
				$('#wrap_auteur a').attr('href', 'annonceur.html?id_a='+id);
				
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
