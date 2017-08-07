'use strict';

var homePage = {};

homePage.load = function() {
  $('.tab-content').hide();
  $('.about-me').show();
};

homePage.navBar = function() {
  $('.hamburger-menu, li').hover(
    function(){
      $('.nav-bar ul').removeClass('hide');
      console.log($('nav-bar ul'));
    },
    function(){
      $('.nav-bar ul').addClass('hide');
    });
};

homePage.tabs = function() {
  $('.nav-bar').on('click', 'li', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $('.' + $(this).data('attribute')).fadeIn();
  });
};

homePage.load();
homePage.navBar();
homePage.tabs();
