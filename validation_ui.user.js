// ==UserScript==
// @name         Webjet validation overhaul
// @namespace    http://webjet.com.au/
// @version      0.2
// @description  enter something useful
// @author       Shannon Murdoch
// @match        http://www.webjet.com.au/*
// @match        https://www.webjet.com.au/*
// @match        http://flights.webjet.com.au/*
// @match        https://flights.webjet.com.au/*
// @grant        none
// ==/UserScript==

$("head").append('<link href="https://raw.githubusercontent.com/sydneyshan/wj-validation-ui/master/validation_ui.css" rel="stylesheet" type="text/css">');

//$('body').css('background-color', 'red');
console.log('done');