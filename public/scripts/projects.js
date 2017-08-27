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

  Project.fetchAll = () => {
    if (!localStorage.projectData) {
      console.log('no local storage');  //testing to see if functionality works
      $.getJSON('data/projectData.json', function(){
      }) .then (function(data){
        console.log('json retrieval succesful');
        Project.load(data);
        localStorage.setItem('projectData', JSON.stringify(data));
      }) .fail (function(err){
        console.log(err);
      });
    } else {
      console.log('localStorage exists');
      Project.load(JSON.parse(localStorage.projectData));
    }
  };

  module.Project = Project;

})(app);
