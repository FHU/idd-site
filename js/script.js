

$(function() {
	
	$( window ).resize(function() {
		load_chart();
	});

	load_chart();
});


function load_chart() {
	$("#jobs ul li").each(function(){
		var view_width = $("#jobs-chart").width();
		var amount = $(this).find("span").text().replace("$","").replace(",","");
		var new_size = (amount * view_width) / 80000;
		$(this).width(new_size);
	});
}