
$(document).ready(function() { 

    $('.Marg-img img').css('opacity', 0.4); 
    
   $('.Marg-img').hover( 
     function(){ 
         $(this).find('img').stop().fadeTo('fast', 1); 
    }, 
      function() { 
        $(this).find('img').stop().fadeTo('fast', 0.4); 
   }); 
    
    });
    