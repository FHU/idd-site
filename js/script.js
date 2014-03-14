
$(document).ready(function(){
	$('.heading').fitText();
	$('header .container #img-text h3').fitText();
	$('header .container #img-text h4').fitText( 1.5, {maxFontSize: '15px'});
	$('header .container #img-text h1').css('letter-spacing', '12px');
	$('header .container #img-text h3').css('letter-spacing', '13px');
});

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
	$("#dev-track-svg-container-1").css({"height": $("#dev-track-1").height()});
	$("#dev-track-svg-container-2").css({"height": $("#dev-track-2").height()});
	$("#design-track-svg-container-1").css({"height": $("#design-track-1").height()});
	if ( $(window).width() >= 992) {
		$("#design-track-2").css({"height": $("#dev-track-container").height() - $("#design-track-1").height() })
	}
	$("#design-track-svg-container-2").css({"height": $("#design-track-2").height()});
}

//core classes svg's
var core1 = Snap("#core-classes-svg-1");
var core2 = Snap("#core-classes-svg-2");
var core3 = Snap("#core-classes-svg-3");

//core svg1
core1.line(26, 33, 0, 33).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 33, 7).attr({ fill: "#67c4ef"});

core1.line(0, 33, 0, 1500).attr({ stroke: "#000", strokeWidth: 1 });

core1.line(0, 65, 26, 65).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 65, 5).attr({fill: "#f7c665"});

core1.line(0, 97, 26, 97).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 97, 5).attr({fill: "#f7c665"});

core1.line(0, 119, 26, 119).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 119, 5).attr({fill: "#f7c665"});

core1.line(0, 141, 26, 141).attr({ stroke: "#000", strokeWidth: .5 });
core1.circle(26, 141, 5).attr({fill: "#f7c665"});

//core svg2
core2.line(0, 0, 0, 600).attr({ stroke: "#000", strokeWidth: 1 });

core2.line(0, 12, 26, 12).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 12, 5).attr({fill: "#f7c665"});

core2.line(0, 34, 26, 34).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 34, 5).attr({fill: "#f7c665"});

core2.line(0, 56, 26, 56).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 56, 5).attr({fill: "#f7c665"});

core2.line(0, 78, 26, 78).attr({ stroke: "#000", strokeWidth: .5 });
core2.circle(26, 78, 5).attr({fill: "#f7c665"});

//core svg3
core3.line(0, 0, 0, 600).attr({ stroke: "#000", strokeWidth: 1 });

core3.line(0, 12, 26, 12).attr({ stroke: "#000", strokeWidth: .5 });
core3.circle(26, 12, 5).attr({fill: "#f7c665"});

core3.line(0, 34, 26, 34).attr({ stroke: "#000", strokeWidth: .5 });
core3.circle(26, 34, 5).attr({fill: "#f7c665"});

core3.line(0, 56, 26, 56).attr({ stroke: "#000", strokeWidth: .5 });
core3.circle(26, 56, 5).attr({fill: "#f7c665"});


//connection svg's
var connector1 = Snap("#connector-svg-1");
var connector2 = Snap("#connector-svg-2");
var connector3 = Snap("#connector-svg-3");
var connector4 = Snap("#connector-svg-4");

connector1.line(0, 0, 0, 20).attr({ stroke: "#000", strokeWidth: 1 });
connector1.line(0, 20, 800, 20).attr({ stroke: "#000", strokeWidth: .5});

connector2.line(0, 20, 0, 80).attr({ stroke: "#000", strokeWidth: 1});

connector3.line(600, 0, 160, 0).attr({ stroke: "#000", strokeWidth: 1});
connector3.line(160, 0, 160, 20).attr({ stroke: "#000", strokeWidth: .5});
connector3.circle(160, 20, 7).attr({fill: "#67c4ef"});

connector4.line(0, 0, 175, 0).attr({ stroke: "#000", strokeWidth: 1});
connector4.line(175, 0, 175, 20).attr({ stroke: "#000", strokeWidth: .5});
connector4.circle(175, 20, 7).attr({fill: "#67c4ef"});

//dev track svg's
var dev1 = Snap("#dev-track-svg-1");
var dev2 = Snap("#dev-track-svg-2");

//dev svg1
dev1.line(26, 33, 0, 33).attr({ stroke: "#000", strokeWidth: .5 });
dev1.circle(26, 33, 7).attr({ fill: "#67c4ef"});

dev1.line(0, 33, 0, 1000).attr({ stroke: "#000", strokeWidth: 1 });

dev1.line(0, 67, 26, 67).attr({ stroke: "#000", strokeWidth: .5 });
dev1.circle(26, 67, 5).attr({fill: "#f7c665"});

dev1.line(0, 89, 26, 89).attr({ stroke: "#000", strokeWidth: .5 });
dev1.circle(26, 89, 5).attr({fill: "#f7c665"});

dev1.line(0, 111, 26, 111).attr({ stroke: "#000", strokeWidth: .5 });
dev1.circle(26, 111, 5).attr({fill: "#f7c665"});

//dev svg2
dev2.line(0, 0, 0, 600).attr({ stroke: "#000", strokeWidth: 1 });

dev2.line(0, 12, 26, 12).attr({ stroke: "#000", strokeWidth: .5 });
dev2.circle(26, 12, 5).attr({fill: "#f7c665"});

dev2.line(0, 34, 26, 34).attr({ stroke: "#000", strokeWidth: .5 });
dev2.circle(26, 34, 5).attr({fill: "#f7c665"});

dev2.line(0, 56, 26, 56).attr({ stroke: "#000", strokeWidth: .5 });
dev2.circle(26, 56, 5).attr({fill: "#f7c665"});

//end dev svg
var end1 = Snap("#end-dev-svg");

end1.line(0, 0, 800, 0).attr({ stroke: "#000", strokeWidth: 1});

//design track svg's
var design1 = Snap("#design-track-svg-1");
var design2 = Snap("#design-track-svg-2");

//design svg1
design1.line(26, 33, 0, 33).attr({ stroke: "#000", strokeWidth: .5 });
design1.circle(26, 33, 7).attr({ fill: "#67c4ef"});

design1.line(0, 33, 0, 1000).attr({ stroke: "#000", strokeWidth: 1 });

design1.line(0, 67, 26, 67).attr({ stroke: "#000", strokeWidth: .5 });
design1.circle(26, 67, 5).attr({fill: "#f7c665"});

design1.line(0, 89, 26, 89).attr({ stroke: "#000", strokeWidth: .5 });
design1.circle(26, 89, 5).attr({fill: "#f7c665"});

design1.line(0, 111, 26, 111).attr({ stroke: "#000", strokeWidth: .5 });
design1.circle(26, 111, 5).attr({fill: "#f7c665"});

//design svg2
design2.line(0, 0, 0, 600).attr({ stroke: "#000", strokeWidth: 1 });

design2.line(0, 12, 26, 12).attr({ stroke: "#000", strokeWidth: .5 });
design2.circle(26, 12, 5).attr({fill: "#f7c665"});

design2.line(0, 34, 26, 34).attr({ stroke: "#000", strokeWidth: .5 });
design2.circle(26, 34, 5).attr({fill: "#f7c665"});

//end svg's
var end1 = Snap("#end-svg-1");
var end2 = Snap("#end-svg-2");

end1.line(0, 0, 800, 0).attr({ stroke: "#000", strokeWidth: 1});

end2.line(0, 0, 800, 0).attr({ stroke: "#000", strokeWidth: 1});
end2.line(7, 0, 7, 30).attr({ stroke: "#000", strokeWidth: .5});
end2.circle(7, 30, 7).attr({fill: "#67c4ef"});
/*****************************************************************************************/