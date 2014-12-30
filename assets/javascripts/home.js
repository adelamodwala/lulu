//Home.js

var $ = jQuery;

function squareItem(item) {
	item.each(function() {
		var tile = $(this);
		// tile.css('height','');
		var width = tile.width();
		tile.css('height', width);

	});
}

function checkContentHeight() {
	var cHeight = $(".site-footer").height() + $(".site-content").height();
	if(cHeight < innerHeight) $('.home-page .grid-group').addClass('big-tiles');
}

function checkProjectHeights() {
	var infoHeight = $('.project-info').height();
	var footerHeight = $('.site-footer').height();
	if(infoHeight > innerHeight - footerHeight) $('.project-container').addClass('hijack-screen')
}

function resizeFunctions() {
	checkContentHeight();
	// checkProjectHeights();
}

function loadInstagram() {
	if($('.post').hasClass('about-page')) {
	  var feed = new Instafeed({
	    get: 'user',
	    userId: 1442533530,
	    accessToken: '1442533530.467ede5.4809712fc8f44433b51c79a2e6e30971',
	    target: 'insta-feed',
	    limit: 2,
	    sortBy: 'most-recent',
	    resolution: 'low_resolution'
	  });
	  feed.run();
	}
}

$(document).ready(function() {

	resizeFunctions();
	$(window).resize(resizeFunctions);

	loadInstagram();

});