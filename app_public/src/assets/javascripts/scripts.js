
//JQuery function/plugin to return only the text of any selected node even when there are other child nodes inside --sharan
//source: https://www.viralpatel.net/jquery-get-text-element-without-child-element/
jQuery.fn.justtext = function() {
  
	return $(this)	.clone()
			.children()
			.remove()
			.end()
			.text();

};

/*
particlesJS.load('particles-js', 'assets/config/particles.json', function() {
	console.log('callback - particles.js config loaded');
});
*/