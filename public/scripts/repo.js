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
      // console.log(results);
      module.repos.all = results.map(repo => {
        if(repo.full_name = "goozgooz/cookie_stand"){
        console.log(repo);
        return repo;
      }
      })
      console.log(module.repos.all);
      callback();
    }), error => {
      console.log(error);
    }
  }

  module.repos = repos;
})(app);
