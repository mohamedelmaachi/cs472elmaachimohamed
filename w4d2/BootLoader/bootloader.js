var loading = false;

$(function() {
	$("#load").click(fetchBoot);
	createLoadingMesage();
});

function createLoadingMesage() {
	var throbber = $('<img>').attr('src','loading.gif');
	var div = $('<div>',{
		'text':'Loading...',
		'id':'loading'
	})
		.append(throbber)
		.hide()
		.ajaxStart(function() {
      		$(this).show();
      		$('#boot').empty();
    	}).ajaxStop(function() {
      		$(this).hide();
    	});

	$('#container').append(div);
}

function fetchBoot() {

	$.ajax("data.json", { 
		'type': 'get'
		
    })
    	.done(displayBoot)
    	.fail(ajaxFailure);
}

function displayBoot(data) {
	
	data = JSON.parse(data);
	data = data.data[Math.floor(Math.random() * data.data.length)];
	console.log(data);
	$('#boot').append($('<img>').attr('src', data));
}

// display a useful error message for debugging purposes (called only if the
// Ajax request did NOT come back successfully)
function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}
