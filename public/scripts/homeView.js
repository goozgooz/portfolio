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
    },
    function(){
      $('.nav-bar ul').addClass('hide');
    });
};

page('/home', home);
page('/projects', home);
page('/contact', contact);
page('/*', notFound);
page();

function home() {
  console.log('hi');
  $('.tab-content').hide();
  // $('header li').removeClass();
  // $('#home').addClass('active-link');
  $('.about-me').fadeIn();
}

// homePage.tabs = function() {
//   $('.nav-bar').on('click', 'li', function(e) {
//     e.preventDefault();
//     $('.tab-content').hide();
//     $('header li').removeClass();
//     $(this).addClass('active-link');
//     $('.' + $(this).data('attribute')).fadeIn();
//   });
// };

homePage.load();
homePage.navBar();
homePage.tabs();
