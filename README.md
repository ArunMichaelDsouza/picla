<img src="https://github.com/ArunMichaelDsouza/picla/raw/master/icon.png" width="250" height="auto" alt="picla icon"/>

#  [![npm version](https://badge.fury.io/js/picla.svg)](https://badge.fury.io/js/picla) [![NPM Downloads](https://img.shields.io/npm/dm/picla.svg?style=flat-square)](https://www.npmjs.com/package/picla) [![Latest Stable Version](https://img.shields.io/bower/v/picla.svg?style=flat-square)](http://bower.io/search/?q=picla) <span class="badge-patreon"><a href="https://www.patreon.com/arunmichaeldsouza" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-blue.svg" alt="Patreon donate button" /></a></span>
jQuery plugin that converts Alt-texts into simple image labels

[http://arunmichaeldsouza.github.io/picla/](http://arunmichaeldsouza.github.io/picla/)

### [Demo on CodePen](http://codepen.io/amdsouza92/full/aZOPVZ/)

![picla](https://raw.githubusercontent.com/ArunMichaelDsouza/picla/master/demo/img/example.png)

<br/>

## Installation

#### CDN 

Use picla directly from jsdelivr CDN

```html
https://cdn.jsdelivr.net/jquery.picla/0.8.3/picla.min.js
```

#### via bower

You can install the package using bower. Make sure you have bower installed, then run : 

```html
bower install picla
```

#### via npm

```html
npm install picla
```

Or, [download](https://github.com/ArunMichaelDsouza/picla/releases) the latest version and include ``picla.min.js`` to your project.

<br/>

## Usage

Just add the class ``picla`` to any image with descriptive ``Alt text`` in order to convert it into a label

```html
<img src="/path-to-image" class="picla" alt="Garden Design"/>
```

Picla wraps the image within a wrapper and does not add any styles to the created label out of the box.
You can use the ``data-label-class`` option to add your custom styles

<br/>

## Options

#### ``data-label-class``

Add a CSS class (custom styles) to the label

```html
<img src="/path-to-image" class="picla" data-label-class="image-label-black" alt="Garden Design"/>

```

#### ``data-label-slideUp``

Make the label slide up from the bottom when the user hovers over the image wrapper

```html
<img src="/path-to-image" class="picla" data-label-slideUp data-label-class="image-label-black" alt="Garden Design"/>
```

You can also add in some transition to this effect by passing in a duration. Default is 300ms

```html
<img src="/path-to-image" class="picla" data-label-slideUp="2s" data-label-class="image-label-black" alt="Garden Design"/>
```

#### ``data-label-fadeIn``

Make the label fade in when the user hovers over the image wrapper

```html
<img src="/path-to-image" class="picla" data-label-fadeIn data-label-class="image-label-black" alt="Garden Design"/>
```

You can add some transition to this effect as well by passing in a duration

<br/>

picla also supports HTML tags within the alt text

```html
<img src="/path-to-image" class="picla" alt="More about Garden Design <a href='/link'>here</a>" data-label-class="image-label-black"/>
```

<br/>

## Support

If you'd like to help support the development of the project, please consider backing me on Patreon -

[<img src="https://arunmichaeldsouza.com/img/patreon.png" width="180px;"/>](https://www.patreon.com/bePatron?u=8841116)

<br/>

## License

MIT Licensed

Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


