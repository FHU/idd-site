

$(function() {
	
	$( window ).resize(function() {
		load_chart();
	});

	load_chart();
});


function load_chart() {
	$("#jobs ul.chart-box li").each(function(){
		var view_width = $("#jobs-chart").width();
		var amount = $(this).find("span").text().replace("$","").replace(",","");
		var new_size = ((amount * view_width) / 80000) - 30;
		$(this).width(new_size);
	});
}

/**** Classes Java Script ***************************************************************/
//fix svg heights
$(window).load( function() {
	fix_svg_height();
});

$(window).resize( function() {
	fix_svg_height();
});

function fix_svg_height() {
	$("#core-classes-svg-container-1").css({"height": $("#core-classes-1").height()});
	$("#core-classes-svg-container-2").css({"height": $("#core-classes-2").height()});
	$("#core-classes-svg-container-3").css({"height": $("#core-classes-3").height()});
}

//core classes svg's
var core1 = Snap("#core-classes-svg-1");
var core2 = Snap("#core-classes-svg-2");
var core3 = Snap("#core-classes-svg-3");

//core svg1
core1.line(26, 33, 0, 33).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 33, 7).attr({ fill: "#00ffff"});

core1.line(0, 33, 0, 1000).attr({ stroke: "#000", strokeWidth: 1 });

core1.line(0, 65, 26, 65).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 65, 5).attr({fill: "#ff9900"});

core1.line(0, 97, 26, 97).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 97, 5).attr({fill: "#ff9900"});

core1.line(0, 119, 26, 119).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 119, 5).attr({fill: "#ff9900"});

core1.line(0, 141, 26, 141).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 141, 5).attr({fill: "#ff9900"});

//core svg2
core2.line(0, 0, 0, 600).attr({ stroke: "#000", strokeWidth: 1 });

core2.line(0, 12, 26, 12).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 12, 5).attr({fill: "#ff9900"});

core2.line(0, 34, 26, 34).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 34, 5).attr({fill: "#ff9900"});

core2.line(0, 56, 26, 56).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 56, 5).attr({fill: "#ff9900"});

core2.line(0, 78, 26, 78).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 78, 5).attr({fill: "#ff9900"});

//core svg3
core3.line(0, 0, 0, 600).attr({ stroke: "#000", strokeWidth: 1 });

core3.line(0, 12, 26, 12).attr({ stroke: "#000", strokeWidth: .5 });
core3.circle(26, 12, 5).attr({fill: "#ff9900"});

core3.line(0, 34, 26, 34).attr({ stroke: "#000", strokeWidth: .5 });
core3.circle(26, 34, 5).attr({fill: "#ff9900"});

core3.line(0, 56, 26, 56).attr({ stroke: "#000", strokeWidth: .5 });
core3.circle(26, 56, 5).attr({fill: "#ff9900"});


//connection svg
var connector = Snap("#connector-svg");

connector.line(0, 0, 0, 20).attr({ stroke: "#000", strokeWidth: 1 });
connector.line(0, 20, 400, 20).attr({ stroke: "#000", strokeWidth: .5});

connector.line(400, 20, 400, 40).attr({ stroke: "#000", strokeWidth: .5});
connector.line(200, 40, 600, 40).attr({ stroke: "#000", strokeWidth: .5});

connector.line(200, 40, 200, 60).attr({ stroke: "#000", strokeWidth: .5});
connector.line(600, 40, 600, 60).attr({ stroke: "#000", strokeWidth: .5});
connector.circle(200, 60, 5).attr({fill: "#00ffff"});
connector.circle(600, 60, 5).attr({fill: "#00ffff"});
/*****************************************************************************************/