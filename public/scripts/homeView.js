'use strict';

var app = app || {};

(function(module){

  var homePage = {};

  homePage.load = () => {
    $('.tab-content').hide();
    $('.about-me').show();
  };

  homePage.navBar = () => {
    $('.hamburger-menu, li').hover(
      function(){
        $('.nav-bar ul').removeClass('hide');
      },
      function(){
        $('.nav-bar ul').addClass('hide');
      });
  };

  homePage.index = () => {
    $('.tab-content').hide();
    $('header a').removeClass('active-link');
    $('.home-link').addClass('active-link');
    $('.about-me').fadeIn();
  };

  homePage.project = () => {
    $('.tab-content').hide();
    $('header a').removeClass('active-link');
    $('.project-link').addClass('active-link');
    $('.project-holder').fadeIn();
  };

  homePage.load();
  homePage.navBar();
  // homePage.tabs();

  module.homePage = homePage;

})(app);
