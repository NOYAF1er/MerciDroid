function envoi_msg(){
		
	var lien = 'http://127.0.0.1/Merci/php/suggestion.php';
	var email = $('#mail').val();
	var msg = $('#msg').val();
	
	var valeur_data = 'mail='+email+'&msg='+msg;
	
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
			console.log(data);
			if(data=='succes')
			{
				alert("Youpi ! Votre message a été envoyé !");
			}
			else
			{
				alert("Attention ! Veuillez renseigner tout les champs.");
			}
		},
		error: function(data, status, erreur){
			console.log(data);
			alert("Zut ! Une erreur s'est produite lors de l'envoi de votre message.");
		}
	});
	return false;	
};
    