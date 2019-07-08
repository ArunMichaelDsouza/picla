/*
    picla v0.8.9
    Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
    Demo on CodePen - http://codepen.io/amdsouza92/full/aZOPVZ/
*/

(function ($) {

    "use strict";

    // Constructor function to create image element 
    function ImageElement(elem, altText) {
        this.elem = elem; // Current image element
        this.altText = altText; // Element's alt text
    }

    // Function to get class string of current image
    ImageElement.prototype.getClassString = function () {

        // Get array of classes applied to current element
        var classList = $(this.elem).attr('class').split(/\s+/);

        // Remove class 'picla' from the array
        classList = $.grep(classList, function (value) {
            return value != 'picla';
        });

        // Generate class string for current image
        var classString = '';
        for (var i = 0; i < classList.length; i++) {
            classString += ' ' + classList[i];
        }

        return classString;
    };

    // Function to get source of current image
    ImageElement.prototype.getSrc = function () {
        return this.elem.src;
    };

    // Function to get parent element of current image
    ImageElement.prototype.getParent = function () {
        return this.elem.parentElement;
    };

    // Get all image elements with class of 'picla'
    var elements = $('img.picla');

    // Function to generate image labels for all image elements
    function generateImageLabel(imgElement) {

        // Fire interval to check computed width of image
        var interval = setInterval(function () {

            // If its calculated then clear inteval and run process
            if (window.getComputedStyle(imgElement.elem).width !== '0px') {
                clearInterval(interval);

                // Get computed width of image element
                var width = window.getComputedStyle(imgElement.elem).width;

                // Get parent element of image element 
                var parent = imgElement.getParent();

                // Create wrapper for image element to be rendered
                var wrapper = document.createElement('div');

                // Add default CSS to wrapper
                $(wrapper).css({
                    'display': 'inline-block',
                    'position': 'relative',
                    'width': width,
                    'overflow': 'hidden',
                    'margin': getComputedStyle(imgElement.elem).margin,
                    'padding': getComputedStyle(imgElement.elem).padding
                });

                // Add image element classes to the wrapper
                $(wrapper).addClass(imgElement.getClassString());

                // Create label element
                var label = document.createElement('div');
                $(label).css({
                    'position': 'absolute',
                    'bottom': 0,
                    'width': '100%',
                    'box-sizing': 'border-box'
                })
                $(label).html(imgElement.altText);

                // Check for label class attribute
                var labelClass = $(imgElement.elem).attr('data-label-class');
                if (labelClass !== '') {
                    $(label).addClass(labelClass);
                }

                // Create image element to be rendered
                var img = document.createElement('img');

                // Initialise rendered image element
                img.src = imgElement.getSrc();
                $(img).css({
                    'width': '100%',
                    'margin': 0,
                    'padding': 0
                });

                // Check for label hover attributes
                var labelSlideUp = $(imgElement.elem).attr('data-label-slideUp'),
                    labelFadeIn = $(imgElement.elem).attr('data-label-fadeIn');

                // Trigger label slideUp
                if (labelSlideUp !== undefined && labelFadeIn == undefined) {
                    var duration = '.3s'; // Set default transition duration

                    if (labelSlideUp !== '') {
                        duration = labelSlideUp; // Set custom transition duration
                    }

                    $(label).css({
                        '-webkit-transform': 'translateY(100%)',
                        '-moz-transform': 'translateY(100%)',
                        '-ms-transform': 'translateY(100%)',
                        '-o-transform': 'translateY(100%)',
                        'transform': 'translateY(100%)',
                        'transition': 'all ' + duration + ' ease-in-out'
                    });

                    // Hide/show label on mouseover event
                    $(wrapper).mouseover(function () {
                        $(label).css({
                            '-webkit-transform': 'translateY(0)',
                            '-moz-transform': 'translateY(0)',
                            '-ms-transform': 'translateY(0)',
                            '-o-transform': 'translateY(0)',
                            'transform': 'translateY(0)'
                        });
                    });
                    $(wrapper).mouseout(function () {
                        $(label).css({
                            '-webkit-transform': 'translateY(100%)',
                            '-moz-transform': 'translateY(100%)',
                            '-ms-transform': 'translateY(100%)',
                            '-o-transform': 'translateY(100%)',
                            'transform': 'translateY(100%)'
                        });
                    });
                }

                // Trigger label fadeIn
                if (labelFadeIn !== undefined && labelSlideUp == undefined) {
                    var duration = '.3s'; // Set default transition duration

                    if (labelFadeIn !== '') {
                        duration = labelFadeIn; // Set custom transition duration
                    }

                    $(label).css({
                        'opacity': 0,
                        'transition': ' opacity ' + duration + ' ease-in-out '
                    });

                    // Hide/show label on mouseover event
                    $(wrapper).mouseover(function () {
                        $(label).css('opacity', 1);
                    });
                    $(wrapper).mouseout(function () {
                        $(label).css('opacity', 0);
                    });
                }

                // Append generated image and label to wrapper
                wrapper.appendChild(img);
                wrapper.appendChild(label);

                // Replace original image element with wrapper
                parent.replaceChild(wrapper, imgElement.elem);
            }
        }, 1);
    };

    // Loop through all those elements and convert to a wrapper with attached image label
    for (var i = 0; i < elements.length; i++) {

        // Create new image element
        var imgElement = new ImageElement(elements[i], elements[i].alt);

        // Genrate image labels for all elements
        generateImageLabel(imgElement);
    }
})(window.jQuery || window.$);
