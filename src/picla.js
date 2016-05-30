/*
    picla v0.1.0
    Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
*/

(function() {

	// Get all image elements with class of 'picla'
	var elements = $('img.picla');

	// Loop through all those elements and convert to label wrapper
	for(var i=0; i<elements.length; i++) {

		var imgElement = elements[i], // Get current image element
			imgElementAltText = imgElement.alt, // Get alt text of current image element
			displayStyle = window.getComputedStyle(imgElement).display; // Get display style of current image element

		var parent = imgElement.parentElement;

		var wrapper = document.createElement('div');
		wrapper.style.display = displayStyle;

		var img = document.createElement('img');
		img.src = imgElement.src;

		wrapper.appendChild(img);

		parent.replaceChild(wrapper, imgElement);

	}
})();
