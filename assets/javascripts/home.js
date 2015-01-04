//Home.js

var $ = jQuery;
var atAboutPage = $('.post').hasClass('about-page');

function squareItem(item) {
	item.each(function() {
		var tile = $(this);
		// tile.css('height','');
		var width = tile.width();
		tile.css('height', width);

	});
}

function checkContentHeight() {
	var grid = $('.home-page .grid-group');
	grid.removeClass('full-about').removeClass('big-tiles');
	var cHeight = $(".site-footer").height() + $(".site-content").height();
	
	if(cHeight < innerHeight) grid.addClass('full-about');
	cHeight = $(".site-footer").height() + $(".site-content").height();
	if(cHeight < innerHeight && grid.hasClass('full-about')) grid.addClass('big-tiles')
	
	
}

function checkProjectHeights() {
	var infoHeight = $('.project-info').height();
	var footerHeight = $('.site-footer').height();
	if(infoHeight > innerHeight - footerHeight) $('.project-container').addClass('hijack-screen')
}

function resizeHomeFunctions() {
	checkContentHeight();
	// checkProjectHeights();
}

function loadInstagram() {
	if(atAboutPage) {

	  var feed = new Instafeed({
	    get: 'user',
	    userId: 1442533530,
	    accessToken: '1442533530.467ede5.4809712fc8f44433b51c79a2e6e30971',
	    target: 'insta-feed',
	    limit: 2,
	    sortBy: 'most-recent',
	    resolution: 'low_resolution',
	    before: showLoader,
	    after: function() {
	    	hideLoader(true);
	    }
	  });
	  feed.run();
	}
}

function hideLoader(showContent) {
	$(".loader").addClass('hidden');
	if(showContent) {
		TweenLite.to($(".site-content, .site-footer"), 0.6, {opacity: 1});
	}
}

function showLoader() {
	$(".loader").removeClass('hidden');

}

$(document).ready(function() {

	if($('.post').hasClass('home-page')) {
		resizeHomeFunctions();
		$(window).resize(resizeHomeFunctions);
	}


	$('html').waitForImages({
		finished: function() {
			hideLoader(!atAboutPage);
		},
		waitForAll: true
	});

	loadInstagram();

});