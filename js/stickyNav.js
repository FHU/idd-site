    $(document).ready(function() {  
    var stickyNavTop = $('#anotherContainer').offset().top;  
      
    var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  
           
    if (scrollTop > stickyNavTop) {   
        $('#anotherContainer').addClass('stickyNav');  
    } else {  
        $('#anotherContainer').removeClass('stickyNav');   
    }  
    };  
      
    stickyNav();  
      
    $(window).scroll(function() {  
        stickyNav();  
    });  
    });  