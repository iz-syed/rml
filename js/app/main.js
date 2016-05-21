define(["jquery","bootstrap.min","smoothscroll","appeared","jquery.matchHeight-min","slick.min"], function($){
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

});