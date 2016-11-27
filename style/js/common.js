// Определяем устройство
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if(mobile){
   // Создаем ссылку на CSS
	var cssLink = document.createElement("link");
	cssLink.setAttribute("type", "text/css");
	cssLink.setAttribute("rel", "stylesheet");
	cssLink.setAttribute("href", "style/css/mobile.css");
	document.head.appendChild(cssLink);
}

var WindowHeight = function() {
	var height = $(window).height();
	$('body .windowBanner').css({
		'min-height': height
	});
}

$(window).resize(function() {
	WindowHeight();	
});

$(window).on('load', function() {
	console.log('...Load/Complete - OK');
	WindowHeight();	
	$('body').addClass('visible');
});