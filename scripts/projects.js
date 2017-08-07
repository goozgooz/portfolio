'use strict';

var projects = [];

function Project(project){
  this.projectName = project.projectName;
  this.description = project.description;
  this.picture = project.picture;
  this.date = project.date;
};

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').html());
  console.log(template(this));
  return template(this);
};

allProjects.forEach(function(projectData){
  projects.push(new Project(projectData));
});

projects.forEach(function(project) {
  $('.project-holder').append(project.toHtml());
});
