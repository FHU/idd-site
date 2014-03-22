    $(document).ready(function() {  
    var stickyNavTop = $('#mainNav ul').offset().top;  
      
    var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  
           
    if (scrollTop > stickyNavTop) {   
        $('#navBorder').addClass('stickyNav');  
    } else {  
        $('#navBorder').removeClass('stickyNav');   
    }  
    };  
      
    stickyNav();  
      
    $(window).scroll(function() {  
        stickyNav();  
    });  
    });  