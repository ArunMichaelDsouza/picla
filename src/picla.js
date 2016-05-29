/*
    picla v0.1.0
    Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
*/

(function() {
	var elements = $('.picla');

	for(var i=0; i<elements.length; i++) {

		var imgElement = elements[i];
		console.log(imgElement.alt);

		var parent = imgElement.parentElement;
		console.log(parent);

		var wrapper = document.createElement('div');

		parent.replaceChild(wrapper, imgElement);
	}
})();
