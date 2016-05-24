// JavaScript Document
/* we need this only on touch devices */
$(window).load(function(e) {
	/* bind events */
	$(document).on('focus', 'input, textarea', function(e) {
		$('body').addClass('fixfixed');
	}).on('blur', 'input, textarea', function(e) {
		$('body').removeClass('fixfixed');
	});	
});

// Equal Height
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
function pullcol(){
var winW = $(window).width();
if(winW<=640)
{
	$('.recipeinfo').insertAfter('.insertAside');
}
else
{
	$('.recipeinfo').insertAfter('.recipepage');
}
}
$(document).ready(function(){
	//add more blogform
	$('.addmoreform .addmore').click(function(){
		$('.select_state').append('<select data-placeholder="Optional" class="chosen-select" tabindex="1"><option value="" selected disabled>Please select category tags for this post</option><option value="Consumers">Consumer</option><option value="International Customers">International Customer</option><option value="Dealers">Dealer</option><option value="Retail Outlet Owners">Retailer</option></select>');
		$(".chosen-select").chosen();
		$(".chosen-select").trigger("chosen:updated");
		return false;
	});
	//search box
	$('.searchslide').click(function(){
		$('.searchtxt').animate({right:'0%'});
		$('.searchdiv').addClass('opened');	 
	 return false;
	});
	// close button
	$('.closesearch').click(function(){
		$('.searchtxt').animate({right:'-100%'}, function(){
			$('.searchdiv').removeClass('opened');
		});
		return false;
	});
	// body click hide search
	 $(document).click(function(e) {
        if (!$(e.target).is('.searchtxt, .searchtxt *')) {			
			$('.searchtxt').animate({right:'-100%'}, function(){
				$('.searchdiv').removeClass('opened');
			});
        }
    });
	//wrap li content
	$('.cooking').find('li').wrapInner("<p></p>");
	//insert comment after
	 pullcol();
	// list select down
	$('.filterMain > li > a').wrapInner('<span />');
	$('.filterMain > li > a').click(function(){
		var elmtprt=$(this).parent();
		if(!elmtprt.hasClass('downslide')){
		$('.filterMain > li').removeClass('downslide');
		elmtprt.addClass('downslide');
		$('.filterMain > li > ul').slideUp();
		$(this).parent().find('ul').stop(true, true).slideToggle();
		}
		else
		{
		$('.filterMain > li').removeClass('downslide');
		$('.filterMain > li > ul').slideUp();
		}
		return false;
	});
	// Enable Text box
	$('.ingredetail .tetxBox').each(function() {
		$(this).keyup(function(e) {
        	$(this).parent().parent().next('.row').find('.tetxBox').prop('disabled',false);    
        });		
	});
	$('.add-more-content .tetxBox').each(function() {
		$(this).keyup(function(e) {
        	$(this).next().prop('disabled',false);    
        });		
	});
	// List Enable
	$('.filterby h6').click(function(){
		$('.filterby .filterMain').slideToggle();
	});
	// Add more
	$('#addcooking').click(function(){
		$('.add-more-content').append('<input type="text" value="" class="tetxBox" placeholder="Please add the cooking step">');
		return false;
	});
	
	$(".chosen-select").chosen();
	$('a#addingredient').click(function(){
		$(".ingredetail .formInnerField").append('<div class="row setinput"><div class="col-xs-6"><input type="text" value="" class="tetxBox" placeholder="Please add the name of the ingredient"></div><div class="col-xs-3"><input type="text" value="" class="tetxBox" placeholder="Please add units"></div><div class="col-xs-3 measure"><select class="chosen-select"><option>Measurement</option><option>litre</option><option>table spoon</option></select></div>');
		$(".chosen-select").chosen();
		$(".chosen-select").trigger("chosen:updated");
		return false;
	});
	setScreen();
	setClick();
	imgHit();
	//$('.full-bg').css({backgroundSize: "cover"});
	
	$(window).scroll(function(){
		var winH = $(window).height();
		var secH = $('#slideContainer').innerHeight()-50;
		var winW = $(window).width();
		
		
			
		if($(window).scrollTop() > 80) {
			$('#introWrapper').css({top:0});
		} else {
			$('#introWrapper').css({top:24});
		}
		
		
		if($(window).scrollTop() > 100) {
			$('#introWrapper').addClass('sticky');
		} else {
			$('#introWrapper').removeClass('sticky');
		}	
		
		if(winW < 1023){
			$('#introWrapper').css({top:0});
		}
		
		
	});
	
	$('.dashTrigger').on('click', function(){
		$('.drashMenu, .dashTrigger').toggleClass('openMenu');
	});
	
	
	// Scroll Animation
	$('*[data-animated]').addClass('animated');
	
	
	$('nav ul li a').click(function(){
		var scrollAttr = $(this).attr("href");
		$('html, body').animate({
			scrollTop:$(scrollAttr).offset().top-48
		}, 500);
		//return false;
	});
	
	$(window).scroll(function () {
		$(".sections").each(function (index) {
			var offset = $(this).offset().top - 48;
			if ($(window).scrollTop() >= offset) {
				$('nav ul li a').removeClass('active');
				$('nav ul li').eq(index).children('a').addClass('active');
			}
		});
	});
	
	$('.logo').click(function(){
		$('html, body').animate({
			scrollTop:0
		}, 500);
	});
	$('.triggerMenu').on('click', function(){
		$('nav, body, header, .triggerMenu').toggleClass('open');
	});
	
	$('.cLose').click(function(){
		$('.errorMsg').css({"marginBottom":"0"+"px"}).slideUp();		
	});
	
	$('#bread-crumb li:last-child').css({"background":"none","paddingRight:":"0"});
	$('#bread-crumb li:first-child').css({"paddingLeft:":"0"});
	$('.nutritionList table tr td:last-child').css({"paddingRight":"10"});
	$('.ingrdientList li:first-child').css({"paddingTop":"0"});
	$('.ingrdientList li:last-child').css({"borderBottom":"none"});	
	$('.feartureList li:last-child').css({"paddingRight":"0"});	
	
	$('.storyLine .row:nth-child(even) h3').addClass('dottedHrLine');
	
	
	$(function(){
		$(window).scroll(function() {
			var $myDiv = $('#myDiv');
			var st = $(this).scrollTop();
			$myDiv.height( st );
			if( st == 0 ) {
				$myDiv.hide();
			} else {
				$myDiv.show();
			}
		}).scroll();
	})
	
	//tab
	$('.tab-content:first').addClass('current').css({display:'block'});
    $('ul.tabs li a:first').addClass('current');
	$('ul.tabs li a').click(function(e){
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li a').removeClass('current');
		$('.tab-content').removeClass('current').fadeOut();
		$(this).addClass('current');
		$("#"+tab_id).addClass('current').fadeIn();
	})
	
});



var imgHit = function(){
	var windowWidth = $(window).width();
	if(windowWidth >= 640) {
		var bannerHit = $('.asidBg').height();
		var bannerHitPad = 	(bannerHit+42);
		$('.recipeBanner').css({height:bannerHitPad,"overflow":"hidden"});
		
		$('.formRow').each(function(){
			$(this).find('.errorBox').insertBefore($(this).find('.formInnerField'));
		});
		
	} else {
		$('.recipeBanner img').css({"height":"auto"});
		$('.formRow').each(function(){
			$(this).find('.errorBox').insertAfter($(this).find('label'));
		});
	}
}

var setScreen = function(){
	var windowHeight = $(window).height();
	$('#slideContainer').css({height:windowHeight});
	
	var storyContainer = $('#our-story').css({minHeight:windowHeight-48});
	var middleContainerOne = $('#our-story .middleContainer').innerHeight();
	if(windowHeight > (middleContainerOne+100)) {
		$('#our-story .middleContainer').css({
			marginTop:'-'+(middleContainerOne/2)+"px",
			position:'absolute'
		});
	} else {
		$('#our-story .middleContainer').css({
			marginTop:0,
			position:'static'
		});
	}
	
	
	var windowHeight = $(window).height();
	var headerHeight = $('#header').innerHeight();
	var pageHeader = $('.pageHeader').innerHeight();
	var subHeight = windowHeight-(headerHeight+pageHeader);
	$('#notFoundSubpage').css({minHeight:subHeight});
	$('.middleFound').css({height:subHeight});
	
	
	var greenContainer = $('#factoryGreen').css({minHeight:windowHeight-48});
	
	var middleContainerThree = $('#factoryGreen .middleContainer').innerHeight();
	if(windowHeight > (middleContainerThree+100)){
		$('#factoryGreen .middleContainer').css({
			marginTop:'-'+(middleContainerThree/2)+"px",
			position:'absolute'
		});
	} else {
		$('#factoryGreen .middleContainer').css({
			marginTop:0,
			position:'static'
		});
	}
	
	
	$('#hillsGrassbg').css({minHeight:windowHeight-256});
	$('#our-storySubpage').css({minHeight:windowHeight-256});
	//$('#recipeSubpage').css({minHeight:windowHeight});
	
	var storyImg = $('.rouundImg').height();
	$('.storyHints').css({height:storyImg});
}

function setClick(){
	var windowWidth = $(window).width();
	if(windowWidth <= 1023) {
		
		
		$('.navLeft > ul > li > a').addClass('mainLink');
		$('ul.subLinks').parent().find('a').removeClass('mainLink');
		$('nav ul > li > a.mainLink').click(function(){
			$('nav, body, header, .triggerMenu').removeClass('open');
		});
		
		$('nav ul li').click(function(){
			$(this).find('.subLinks').addClass('subLinksOpen');
			//return false;
		});
	}
}



$(window).resize(function(){
	equalheight('.gridGroup , .poductIocnBlk > .col-xs-2 , .detailSlide li, ul.productPageList li');
	equalheight('.recDesc h4');
	setScreen();
	setClick();
	imgHit();
	pullcol();
});
$(window).load(function(){
	equalheight('.gridGroup, .poductIocnBlk > .col-xs-2, .detailSlide li, ul.productPageList li');
	equalheight('.recDesc h4');
	setScreen();
	imgHit();
	$('body').animate({opacity:1});
	
	
	// Scroll Animation				
	function animated_contents() {
		$(".animated:appeared").each(function (i) {
			var $this    = $(this),
				animated = $(this).data('animated');
			setTimeout(function () {
				$this.addClass(animated);
			}, 70 * i);

		});
	}
	animated_contents();
	$(window).scroll(function () {
		animated_contents();
	});
});
$(window).bind('orientationchange', function(){
	equalheight('.gridGroup, .poductIocnBlk > .col-xs-2, .detailSlide li, ul.productPageList li');
	setScreen();
	setClick();
	imgHit();
	pullcol();
});

// offsetRelative (or, if you prefer, positionRelative)
(function($){
   $.fn.offsetRelative = function(top){
       var $this = $(this);
       var $parent = $this.offsetParent();
       var offset = $this.position();
       if(!top) return offset; // Didn't pass a 'top' element 
       else if($parent.get(0).tagName == "BODY") return offset; // Reached top of document
       else if($(top,$parent).length) return offset; // Parent element contains the 'top' element we want the offset to be relative to 
       else if($parent[0] == $(top)[0]) return offset; // Reached the 'top' element we want the offset to be relative to 
       else { // Get parent's relative offset
           var parent_offset = $parent.offsetRelative(top);
           offset.top += parent_offset.top;
           offset.left += parent_offset.left;
           return offset;
       }
   };
   $.fn.positionRelative = function(top){
       return $(this).offsetRelative(top);
   };
}(jQuery));