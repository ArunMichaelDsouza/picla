/*
    picla v0.1.0
    Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
*/

(function() {

	// Get all image elements with class of 'picla'
	var elements = $('img.picla');

	// Loop through all those elements and convert to label wrapper
	for(var i=0; i<elements.length; i++) {

		var imgElement = elements[i], // Get current image element
			imgElementAltText = imgElement.alt; // Get alt text of current image element
			imgElementWidth = window.getComputedStyle(imgElement).width; // Get width of current image element

		// Get class list of element
		var classList = $(imgElement).attr('class').split(/\s+/);

		// Remove class 'picla' from the class list
		classList = jQuery.grep(classList, function(value) {
			return value != 'picla';
		});

		// Generate class string to be added to rendered image element
		var classString = '';
		for(var i=0; i<classList.length; i++) {
			classString += ' '+classList[i];
		}

		// Get parent element of current image element
		var parent = imgElement.parentElement;

		// Create wrapper for image element to be rendered
		var wrapper = document.createElement('div');

		// Add default CSS to wrapper
		$(wrapper).css({
			'display': 'inline-block',
			'width': imgElementWidth
		});	

		// Create image element to be rendered
		var img = document.createElement('img');

		// Initialise rendered image element
		img.src = imgElement.src;
		$(img).css('width', '100%');
		$(img).addClass(classString);

		// Append it to wrapper
		wrapper.appendChild(img);

		// Replace original image element with wrapper
		parent.replaceChild(wrapper, imgElement);

	}
})();
