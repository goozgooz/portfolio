'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.get('/repos') {
      .then(data => repos.all = data)
      console.log(repos.all);
      .then(callback)
    }
  }

  module.repos = repos;
})(app);
