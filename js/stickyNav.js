    $(document).ready(function() {  
    var stickyNavTop = $('#mainNav ul').offset().top;  
      
    var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  
           
    if (scrollTop > stickyNavTop) {   
        $('#mainNav ul').addClass('stickyNav');  
    } else {  
        $('#mainNav ul').removeClass('stickyNav');   
    }  
    };  
      
    stickyNav();  
      
    $(window).scroll(function() {  
        stickyNav();  
    });  
    });  