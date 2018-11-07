/**
 * Load page into url
 *
 * @param url           The url to load
 */
function loadPage(url) {
	window.localStorage.setItem("end_page", "false");
    $.ajax({
		url: url,
		dataType: 'html',
		timeout: 5000,
		success: function(data, status){
			//data loaded
			document.getElementById('container').innerHTML = data;
		},
		error: function(){
			//error loading data
			document.getElementById('container').innerHTML = "Error ;(";
		}
	});
}

function backPage(url) {
	var our_path = localStorage.getItem("end_page");
	if (our_path == "true") {
		document.location.replace("index.html");
	} else {
   		loadPage(url);
   		window.localStorage.setItem("end_page", "true");
   	}
}