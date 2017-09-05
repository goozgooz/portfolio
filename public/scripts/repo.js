'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        'Authorization': `token ${githubToken}`
      }
    })
    .then(results => {
      repos.all = results;
      callback();
    }), error => {
      console.log(error);
    }
  }

  module.repos = repos;
});
