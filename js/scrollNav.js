$(document).ready(function(){
    $("ul li a").click(function(e){
        e.preventDefault();
        var target = $($(this).attr("href"));
        var off = 57;
        scrollToDiv(target, off);
    });
    
    function scrollToDiv(element,navheight){
		
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
		scrollTop: totalScroll
		}, 2000);
	
	};
    
});