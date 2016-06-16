(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var header;

var init = function(){
    header = document.querySelector("#header");
    document.addEventListener("scroll", onScroll);
}

var onScroll = function(){
    var top = (window.scrollY || window.pageYOffset);
    header.className = (top > 72) ? 'main-header main-header--fixed' : 'main-header';
}

var navBar = {
    init: init,
}

module.exports = navBar;
},{}],2:[function(require,module,exports){
var mainNav = require('./components/main-nav');


(function (window) {

    var init = function(){
        document.addEventListener("DOMContentLoaded", ready);
    }

    var ready = function(){
        mainNav.init();
    }

    init();

})(window);
},{"./components/main-nav":1}]},{},[2]);
