'use strict';

var homePage = {};

homePage.navBar = function() {
  $('.hamburger-menu').hover(
    function(){
      $('.nav-bar ul').show();
    },
    function(){
      $('.nav-bar ul').hide();
    });
};

homePage.navBar();
