define(["jquery","bootstrap.min","smoothscroll","appeared","jquery.matchHeight-min"], function($){
/* Functions */
window.onbeforeunload = function(){
	window.scrollTo(0,0);
}

/* Ready Function */
$(function(){
	
});

/* Resize Function */
if(!Modernizr.touch) { 
$(window).resize(function(){
	/* Init function */
	
});
}

/* Orientation Function */
$(window).on("orientationchange",function(){
	/* Init function */
		
});


console.log("working fine!");



// Fullwidth Slider
$(window).scroll(function(){
		var winH = $(window).height();
		var secH = $('#slideContainer').innerHeight()-50;
		var winW = $(window).width();
		
	});  // Full width Slider

// Modal Box

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// });