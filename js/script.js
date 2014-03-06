

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

//classes svg stuff
var core1 = Snap("#core-classes-svgs svg:nth-child(1)");
var core2 = Snap("#core-classes-svgs svg:nth-child(2)");
var core3 = Snap("#core-classes-svgs svg:nth-child(3)");

core1.circle(40, 33, 6);
core1.line(40, 33, 5, 33).attr({ stroke: "#000", strokeWidth: 1 });

core1.line(5, 33, 5, 600).attr({ stroke: "#000", strokeWidth: 1 });

core1.line(40, 65, 5, 65).attr({ stroke: "#000", strokeWidth: 1 });
core1.circle(40, 65, 4);

core1.line(40, 97, 5, 97).attr({ stroke: "#000", strokeWidth: 1 });


core1.line(40, 110, 5, 110).attr({ stroke: "#000", strokeWidth: 1 });


core1.line(40, 171, 5, 171).attr({ stroke: "#000", strokeWidth: 1 });


core1.line(40, 203, 5, 203).attr({ stroke: "#000", strokeWidth: 1 });


core1.line(40, 235, 5, 235).attr({ stroke: "#000", strokeWidth: 1 });