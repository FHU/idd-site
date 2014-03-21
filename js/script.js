
$(document).ready(function(){
	$('.heading').fitText();
	$('header .container #img-text h3').fitText();
	$('header .container #img-text h4').fitText( 1.5, {maxFontSize: '15px'});
	$('header .container #img-text h1').css('letter-spacing', '12px');
	$('header .container #img-text h3').css('letter-spacing', '13px');
});

$(document).ready(function() {

	var owl = $("#learn-notecards");

    owl.owlCarousel({

        //navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
     
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
     
    });

    $(".learn-next").click(function(){
    	owl.trigger('owl.next');
    });

    $(".learn-next a").click(function(event) {
    	event.preventDefault();
    });

    $(".learn-prev").click(function(){
    	owl.trigger('owl.prev');
    });

    $(".learn-prev a").click(function(event) {
    	event.preventDefault();
    });
});

var has_graph_been_reached = false;
$(document).ready(function() {
	controller = new ScrollMagic();
	$( window ).resize(function() {
		if (has_graph_been_reached) {load_chart();}
	});


	// build scene
	var scene = new ScrollScene({triggerElement: "#jobs", duration: 200})
					.addTo(new ScrollMagic());
	scene.on("enter leave", function (e) {
		
		load_chart();
	});

});



function load_chart() {
	$("#jobs ul.chart-box li").each(function(){
		has_graph_been_reached = true;
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
	if (typeof InstallTrigger !== 'undefined') {
		$("#core-classes .svg-container:nth-child(1)").css({"height": $("#core-classes .classes-container:nth-child(2)").height() - 1 });
		$("#core-classes .svg-container:nth-child(3)").css({"height": $("#core-classes .classes-container:nth-child(4)").height() - 1 });
		$("#core-classes .svg-container:nth-child(5)").css({"height": $("#core-classes .classes-container:nth-child(6)").height() - 1 });
		$("#dev-track .svg-container:nth-child(1)").css({"height": $("#dev-track .classes-container:nth-child(2)").height() - 1 });
		$("#dev-track .svg-container:nth-child(3)").css({"height": $("#dev-track .classes-container:nth-child(4)").height() - 1 });
		$("#design-track .svg-container:nth-child(1)").css({"height": $("#design-track .classes-container:nth-child(2)").height() - 1 });

		if ( $(window).width() >= 992) {
			$("#design-track .classes-container:nth-child(4)").css({"height": $("#dev-track").height() - $("#design-track .classes-container:nth-child(2)").height() - 1 })
		}
		$("#design-track .svg-container:nth-child(3)").css({"height": $("#design-track .classes-container:nth-child(4)").height() - 1 });
	} else {
		$("#core-classes .svg-container:nth-child(1)").css({"height": $("#core-classes .classes-container:nth-child(2)").height() });
		$("#core-classes .svg-container:nth-child(3)").css({"height": $("#core-classes .classes-container:nth-child(4)").height() });
		$("#core-classes .svg-container:nth-child(5)").css({"height": $("#core-classes .classes-container:nth-child(6)").height() });
		$("#dev-track .svg-container:nth-child(1)").css({"height": $("#dev-track .classes-container:nth-child(2)").height() });
		$("#dev-track .svg-container:nth-child(3)").css({"height": $("#dev-track .classes-container:nth-child(4)").height() });
		$("#design-track .svg-container:nth-child(1)").css({"height": $("#design-track .classes-container:nth-child(2)").height() });

		if ( $(window).width() >= 992) {
			$("#design-track .classes-container:nth-child(4)").css({"height": $("#dev-track").height() - $("#design-track .classes-container:nth-child(2)").height() })
		}
		$("#design-track .svg-container:nth-child(3)").css({"height": $("#design-track .classes-container:nth-child(4)").height() });
	} 
}

/**** core classes svg's **************************/
var core1 = Snap("#core-classes-svg-1");
var core2 = Snap("#core-classes-svg-2");
var core3 = Snap("#core-classes-svg-3");

//core lines
var core_lines_1 = core1.group( core1.line(26, 33, 1, 33), core1.line(1, 33, 1, 1500), core1.line(1, 65, 26, 65), core1.line(1, 97, 26, 97), core1.line(1, 119, 26, 119), core1.line(1, 141, 26, 141));
var core_lines_2 = core2.group(	core2.line(1, 0, 1, 600), core2.line(1, 12, 26, 12), core2.line(1, 34, 26, 34), core2.line(1, 56, 26, 56), core2.line(1, 78, 26, 78));
var core_lines_3 = core3.group( core3.line(1, 0, 1, 600), core3.line(1, 12, 26, 12), core3.line(1, 34, 26, 34), core3.line(1, 56, 26, 56));

core_lines_1.attr({ stroke: "#000", strokeWidth: .5 });
core_lines_2.attr({ stroke: "#000", strokeWidth: .5 });
core_lines_3.attr({ stroke: "#000", strokeWidth: .5 });

//core points
var core1_head = core1.circle(26, 33, 7).attr({ fill: "#67c4ef"});

var core_dots_1 = core1.group( core1.circle(26, 65, 5), core1.circle(26, 97, 5), core1.circle(26, 119, 5), core1.circle(26, 141, 5));
var core_dots_2 = core2.group( core2.circle(26, 12, 5), core2.circle(26, 34, 5), core2.circle(26, 56, 5), core2.circle(26, 78, 5));
var core_dots_3 = core3.group( core3.circle(26, 12, 5), core3.circle(26, 34, 5), core3.circle(26, 56, 5));

core_dots_1.attr({fill: "#f7c665"});
core_dots_2.attr({fill: "#f7c665"});
core_dots_3.attr({fill: "#f7c665"});



/**** dev track svg's **************************/
var dev1 = Snap("#dev-track-svg-1");
var dev2 = Snap("#dev-track-svg-2");

//dev lines
var dev_lines_1 = dev1.group( core1.line(26, 33, 1, 33), dev1.line(1, 33, 1, 1000), dev1.line(1, 67, 26, 67), dev1.line(1, 89, 26, 89), dev1.line(1, 111, 26, 111));
var dev_lines_2 = dev2.group( dev2.line(1, 0, 1, 600), dev2.line(1, 12, 26, 12), dev2.line(1, 34, 26, 34), dev2.line(1, 56, 26, 56));

dev_lines_1.attr({ stroke: "#000", strokeWidth: .5 });
dev_lines_2.attr({ stroke: "#000", strokeWidth: .5 });

//dev points
var dev_head = dev1.circle(26, 33, 7).attr({ fill: "#67c4ef"});
var dev_dots_1 = dev1.group( dev1.circle(26, 67, 5), dev1.circle(26, 89, 5), dev1.circle(26, 111, 5));
var dev_dots_2 = dev2.group( dev2.circle(26, 12, 5), dev2.circle(26, 34, 5), dev2.circle(26, 56, 5));

dev_dots_1.attr({fill: "#f7c665"});
dev_dots_2.attr({fill: "#f7c665"});

/**** dev end svg's **************************/
var endDev = Snap("#end-dev-svg");

var end_dev_lines = endDev.group(endDev.line(0, 1, 1200, 1))
end_dev_lines.attr({ stroke: "#000", strokeWidth: .5 });


/**** design track svg's **************************/
var design1 = Snap("#design-track-svg-1");
var design2 = Snap("#design-track-svg-2");

//degin lines
var design_lines_1 = design1.group( design1.line(26, 33, 1, 33), design1.line(1, 33, 1, 1000), design1.line(1, 67, 26, 67), design1.line(1, 89, 26, 89), design1.line(1, 111, 26, 111));
var design_lines_2 = design2.group( design2.line(1, 0, 1, 600), design2.line(1, 12, 26, 12), design2.line(1, 34, 26, 34));

design_lines_1.attr({ stroke: "#000", strokeWidth: .5 });
design_lines_2.attr({ stroke: "#000", strokeWidth: .5 });

//design points
var design_head = design1.circle(26, 33, 7).attr({ fill: "#67c4ef"});
var design_dots_1 = design1.group( design1.circle(26, 67, 5), design1.circle(26, 89, 5), design1.circle(26, 111, 5));
var design_dots_2 = design2.group( design2.circle(26, 12, 5), design2.circle(26, 34, 5));

design_dots_1.attr({fill: "#f7c665"});
design_dots_2.attr({fill: "#f7c665"});



/**** connection svg's **************************/
var connector1 = Snap("#connector-svg-1");
var connector2 = Snap("#connector-svg-2");
var connector3 = Snap("#connector-svg-3");
var connector4 = Snap("#connector-svg-4");

var connector_1_lines = connector1.group(connector1.line(1, 0, 1, 20), connector1.line(1, 20, 600, 20));
connector_1_lines.attr({ stroke: "#000", strokeWidth: .5 });

var connector_2_lines = connector2.group(connector2.line(0, 20, 600, 20), connector2.line(7, 40, 600, 40), connector2.line(7, 40, 7, 60));
var connector_2_dot = connector2.circle(7, 60, 7).attr({ fill: "#67c4ef"});
connector_2_lines.attr({ stroke: "#000", strokeWidth: .5 });

var connector_3_lines = connector3.group(connector3.line(0, 20, 1, 20), connector3.line(1, 20, 1, 40), connector3.line(0, 40, 600, 40));
connector_3_lines.attr({ stroke: "#000", strokeWidth: .5 });

var connector_4_lines = connector4.group(connector4.line(0, 40, 7, 40), connector4.line(7, 40, 7, 60));
var connector_4_dot = connector4.circle(7, 60, 7).attr({fill: "#67c4ef"});
connector_4_lines.attr({ stroke: "#000", strokeWidth: .5 });

/**** mobile connect svg's **************************/
var mobileConnect1 = Snap("#mobile-connect-svg-1");
var mobileConnect2 = Snap("#mobile-connect-svg-2");

var mobile_connect_1_lines = mobileConnect1.group(mobileConnect1.line(0, 1, 800, 1))
mobile_connect_1_lines.attr({ stroke: "#000", strokeWidth: .5 });

var mobile_connect_2_lines = mobileConnect2.group(mobileConnect2.line(0, 1, 800, 1), mobileConnect2.line(7, 1, 7, 30))
mobile_connect_2_lines.attr({ stroke: "#000", strokeWidth: .5});
mobileConnect2.circle(7, 30, 7).attr({fill: "#67c4ef"});


/**** ending svg's **************************/
var end1 = Snap("#end-svg-1");
var end2 = Snap("#end-svg-2");

var end_1_lines = end1.group(end1.line(0, 1, 800, 1))
end_1_lines.attr({ stroke: "#000", strokeWidth: .5 });

var end_2_lines = end2.group(end2.line(0, 1, 800, 1), end2.line(7, 1, 7, 30))
end_2_lines.attr({ stroke: "#000", strokeWidth: .5});
end2.circle(7, 30, 7).attr({fill: "#67c4ef"});
/*****************************************************************************************/

/**************************Scrollspy****************************************/
var lastId,
    topMenu = $("#navigation-scrollspy"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";  
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

/*****************************************************************************************/





