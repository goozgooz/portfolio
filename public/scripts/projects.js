'use strict';

var app = app || {};

(function(module) {

  Project.all = [];

  function Project(project){
    this.projectName = project.projectName;
    this.description = project.description;
    this.picture = project.picture;
    this.date = project.date;
  };

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').html());
    return template(this);
  };

  Project.load = function (projectData){
    projectData.forEach(function(project){
      Project.all.push(new Project(project));
    });

    Project.all.forEach(function(project) {
      $('.project-holder').append(project.toHtml());
    });
  };

  Project.fetchAll = function() {
    app.repos.requestRepos(app.Project.load(app.repos.all));

    if (!localStorage.projectData) {
      console.log('no local storage');  //testing to see if functionality works
      $.getJSON('data/projectData.json', function(){
      }) .then (function(data){
        Project.load(data);
        localStorage.setItem('projectData', JSON.stringify(data));
      }) .fail (function(err){
        console.log(err);
      });
    } else {
      Project.load(JSON.parse(localStorage.projectData));
    }
  };

  //Requirements for Portfolio Lab #10
  Project.randomCode = () => {
    var projects = JSON.parse(localStorage.projectData);
    var projectTitles = projects.map(projects => projects.projectName)
                                .reduce((string, titles) => {
                                  return string + titles + ', '}, '');
    console.log(`The following projects are displayed on my portfolio page: ${projectTitles}`);
  }

  module.Project = Project;

})(app);
