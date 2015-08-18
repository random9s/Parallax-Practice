( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
        var s = skrollr.init({
            forceHeight: false,
        });		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
		
} )( jQuery );

function sendEmail() {
    var name = document.getElementById("nameval").value;
    var email = document.getElementById("emailval").value;
    var phone = document.getElementById("phoneval").value;
    var comments = document.getElementById("commentval").value;
              
    var link = 'mailto:jake.august.parham@gmail.com'
    + '&subject=' + escape("Hey")
    + '=&body=' + escape(comments);
    window.open(link);
}

var easter_egg = new Konami(function() {window.location.href="http://www.letsplaysnes.com/play-contra-online-nes/?play=true"});